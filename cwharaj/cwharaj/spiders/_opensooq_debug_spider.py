# -*- coding: utf-8 -*-
import scrapy


class OpensooqDebugSpider(scrapy.Spider):
    name = "opensooq_debug"
    allowed_domains = ["https://sa.opensooq.com/"]
    start_urls = [
        # paginate
        # 'https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=&page=1',
        # ajax
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=42946557&model_type=post'
        # detail
        # 'https://sa.opensooq.com/ar/search/42054599/شقة-للإيجار-حي-النعيم-5-غرف',
        'https://sa.opensooq.com/ar/search/43012611/فيلا-شمال-التخصصي-غرب-ابوبكر-حي-الياسمين'
        # detail without phone number
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=42552861&model_type=post',
        # 'https://sa.opensooq.com/ar/search/42552861/%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA-%D9%84%D9%84%D8%A7%D8%B3%D9%88%D8%A7%D9%82-%D9%88%D8%A7%D9%84%D9%85%D8%AD%D9%84%D8%A7%D8%AA'
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self._opensooq_parser = OpensooqParse()

        from cwharaj.utils.phone_number_set import PhoneNumberSet
        self.phone_dict = PhoneNumberSet()

        super(OpensooqDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(OpensooqDebugSpider, cls).from_crawler(crawler,
                                                            args,
                                                            mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                            )

    def parse(self, response):
        # self._opensooq_parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._opensooq_parser.parse(response.url, response)
        yield item
        # _row = self._cache_db.get_last_row("")

        # step 3: request the last row on the cache database
        # _ajax_url = self.get_ajax_url("")
        # if _ajax_url:
        #     yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)

    def _get_ajax_url(self, _last):
        _row = self._cache_db.get_oldest_row(_last)
        if _row:
            _id = self._cache_db.get_row_id(_row)
            if _id:
                self.phone_dict.add_row(_id, _row)

                # First of all, get the phone number base64 of the page.
                return "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(_id)

        return None

    def ajax_phone_number_for_opensooq(self, response):
        _phone_number_base64 = response.body
        _page_url = self.phone_dict.get_page_url_from_ajax_url(response.url, _phone_number_base64)

        yield scrapy.Request(_page_url, callback=self.parse_page_from_opensooq, dont_filter=True)

    def parse_page_from_opensooq(self, response):
        from urlparse import urlparse
        _id = urlparse(response.url).path.split('/')[3]

        item = self._opensooq_parser.parse(response.url, response)
        item["ID"] = _id
        item["number"] = self.phone_dict.get_phone_number_base64(_id)

        self.phone_dict.remove_row(_id)

        yield item

        # step 2: request the last row on the cache database
        _ajax_url = self._get_ajax_url(response.url)
        if _ajax_url:
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
