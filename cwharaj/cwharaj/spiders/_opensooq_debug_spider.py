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
        # 'https://sa.opensooq.com/ar/search/43012611/فيلا-شمال-التخصصي-غرب-ابوبكر-حي-الياسمين'
        # detail without phone number
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=42552861&model_type=post',
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=39509897&model_type=post'
        # 'https://sa.opensooq.com/ar/search/42552861/%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA-%D9%84%D9%84%D8%A7%D8%B3%D9%88%D8%A7%D9%82-%D9%88%D8%A7%D9%84%D9%85%D8%AD%D9%84%D8%A7%D8%AA'
        # Fix phone number
        'https://sa.opensooq.com/ar/search/43152549/إفطار-صائم-بمكه-المكرمه'
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
        # item = self._opensooq_parser.parse(response.url, response)
        # yield item
        # _row = self._cache_db.get_last_row("")

        _last = ""
        _url_from = ""

        # step 1: request the last row on the cache database
        _row = {
            'ID': '43152549',
            'url': 'https://sa.opensooq.com/ar/search/43152549/إفطار-صائم-بمكه-المكرمه'
        }

        self.phone_dict.add_row(_row['ID'], _row)
        yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)

        # _ajax_url = \
        #     "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(_row['ID'])
        # yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)

    # ====================================================================================
    # opensooq
    # ====================================================================================
    def parse_page_from_opensooq(self, response):
        phone_Number_Item = self._opensooq_parser.parse(response.url, response, self.phone_dict)

        _ajax_url = phone_Number_Item.get_ajax_url()
        yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)

    def ajax_phone_number_for_opensooq(self, response):
        _phone_number_base64 = response.body

        item = self.phone_dict.get_item_from_ajax_url_and_remove_dict(response.url)
        item["number"] = _phone_number_base64
        yield item
