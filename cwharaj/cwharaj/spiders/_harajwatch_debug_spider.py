# -*- coding: utf-8 -*-
from random import Random

import scrapy


class HarajsDebugWatchSpider(scrapy.Spider):
    name = "harajwatch_debug"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com'
    ]
    start_urls = [
        # ================
        # ** opensooq **
        # ================
        # paginate
        # 'https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=&page=1',
        # ajax
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=42946557&model_type=post'
        # detail
        # 'https://sa.opensooq.com/ar/search/42054599/شقة-للإيجار-حي-النعيم-5-غرف',
        # 'https://sa.opensooq.com/ar/search/43012611/فيلا-شمال-التخصصي-غرب-ابوبكر-حي-الياسمين'
        # detail without phone number
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=42552861&model_type=post',
        # 'https://sa.opensooq.com/ar/search/42552861/%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA-%D9%84%D9%84%D8%A7%D8%B3%D9%88%D8%A7%D9%82-%D9%88%D8%A7%D9%84%D9%85%D8%AD%D9%84%D8%A7%D8%AA'

        # ================
        # ** mstaml **
        # ================
        # paginate
        'http://www.mstaml.com/market/?t=0&l=0&d=0&x=&u=&o=3',
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self._opensooq_parser = OpensooqParse()

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._mstaml_Parse = MstamlParse()

        super(HarajsDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsDebugWatchSpider, cls).from_crawler(crawler,
                                                               args,
                                                               mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                               )

    def parse(self, response):
        self._mstaml_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # item = self._mstaml_Parse.parse(response.url, response)
        # yield item
        # _row = self._cache_db.get_last_row("")

    def parse_xxx(self, response):
        # self._opensooq_parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._opensooq_parser.parse(response.url, response)
        # yield item
        # _row = self._cache_db.get_last_row("")
