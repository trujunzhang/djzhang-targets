# -*- coding: utf-8 -*-
import scrapy


class HarajsaDebugWatchSpider(scrapy.Spider):
    name = "harajsa_debug"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com',
        'https://haraj.com.sa',
    ]

    start_urls = [
        # paginate
        'https://haraj.com.sa',
        # Details
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwharaj.parser.harajsa_parser import HarajSaParse
        self._harajsa_Parse = HarajSaParse()

        super(HarajsaDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsaDebugWatchSpider, cls).from_crawler(crawler,
                                                                args,
                                                                mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                                )

    def parse(self, response):
        self._harajsa_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # item = self._harajsa_Parse.parse(response.url, response)
        # yield item
        # _row = self._cache_db.get_last_row("")
