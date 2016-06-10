# -*- coding: utf-8 -*-
import scrapy
import time

from cwharaj.items import WebsiteTypes


class HarajsSpider(scrapy.Spider):
    name = "haraj"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com',
        'https://haraj.com.sa',
    ]
    start_urls = [
        'https://sa.opensooq.com',
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self._opensooq_parser = OpensooqParse()

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._mstaml_Parse = MstamlParse()

        from cwharaj.parser.harajsa_parser import HarajSaParse
        self._harajsa_Parse = HarajSaParse()

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
        _last = ""
        _url_from = ""

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            _ajax_url = \
                "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(_row['ID'])
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)

    def get_row_from_cache(self, _last, url_from):
        while True:
            _row = self._cache_db.get_oldest_row(_last, url_from)
            if _row:
                return _row

            # Return 'None' when the cache table is empty,
            # So we set the _last to empty string.
            _last = ""

            time.sleep(4)

    # ====================================================================================
    # opensooq
    # ====================================================================================
    def ajax_phone_number_for_opensooq(self, response):
        _phone_number_base64 = response.body
        _page_url = self.phone_dict.get_page_url_from_ajax_url(response.url, _phone_number_base64)

        yield scrapy.Request(_page_url, callback=self.parse_page_from_opensooq, dont_filter=True)

    def parse_page_from_opensooq(self, response):
        item = self._opensooq_parser.parse(response.url, response)

        _id = item["ID"]
        item["number"] = self.phone_dict.get_phone_number_base64(_id)
        self.phone_dict.remove_row(_id)

        yield item

        self._history_db.process_item(response.url, id=_id)

        _last = response.url
        _url_from = WebsiteTypes.opensooq.value

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            _ajax_url = \
                "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(_row['ID'])
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)

    def parse_page_from_mstaml(self, response):
        item = self._mstaml_Parse.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url, id=item["ID"])

        _last = response.url
        _url_from = WebsiteTypes.mstaml.value

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            _ajax_url = \
                "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(_row['ID'])
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)

    def parse_page_from_harajsa(self, response):
        item = self._harajsa_Parse.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url, id=item["ID"])

        _last = response.url
        _url_from = WebsiteTypes.harajsa.value

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            _ajax_url = \
                "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(_row['ID'])
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)
