# -*- coding: utf-8 -*-
import scrapy
import logging
import time

from cwharaj.utils.crawl_utils import CrawlUtils


class HarajsSpider(scrapy.Spider):
    name = "haraj"
    allowed_domains = ["https://sa.opensooq.com/"]
    start_urls = [
        # paginate
        'https://sa.opensooq.com',
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self._opensooq_parser = OpensooqParse()

        from cwharaj.utils.phone_number_set import PhoneNumberSet
        self.phone_dict = PhoneNumberSet()

        super(HarajsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsSpider, cls).from_crawler(crawler,
                                                     args,
                                                     mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                     )

    # This is entry point
    def parse(self, response):
        # step 1: request the last row on the cache database
        _ajax_url = self.get_valid_url("")
        if _ajax_url:
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)

    def get_valid_url(self, _last):
        while True:
            _ajax_url = self._get_ajax_url(_last)
            if _ajax_url:
                return _ajax_url

            time.sleep(4)

    def _get_ajax_url(self, _last):
        _row = self._cache_db.get_oldest_row(_last)
        if _row:
            model_id = self._cache_db.get_row_model_id(_row)
            if model_id:
                self.phone_dict.add_row(model_id, _row)

                # First of all, get the phone number base64 of the page.
                _ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(
                    model_id)
                return _ajax_url

        return None

    # ====================================================================================
    # opensooq
    # ====================================================================================
    def ajax_phone_number_for_opensooq(self, response):
        _phone_number_base64 = response.body
        _page_url = self.phone_dict.get_page_url_from_ajax_url(response.url, _phone_number_base64)

        yield scrapy.Request(_page_url, callback=self.parse_page_from_opensooq, dont_filter=True)

    def parse_page_from_opensooq(self, response):
        model_id = CrawlUtils.get_model_id_from_page_url(response.url, 3)

        item = self._opensooq_parser.parse(response.url, response)
        item["ID"] = model_id
        item["number"] = self.phone_dict.get_phone_number_base64(model_id)

        self.phone_dict.remove_row(model_id)

        yield item

        self._history_db.process_item(response.url)

        # step 2: request the last row on the cache database
        _ajax_url = self.get_valid_url(response.url)
        if _ajax_url:
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
