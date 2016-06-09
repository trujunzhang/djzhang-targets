# -*- coding: utf-8 -*-
from random import Random

import scrapy


class HarajsDebugWatchSpider(scrapy.Spider):
    name = "mstamlwatch_debug"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com'
    ]

    start_urls = [

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

