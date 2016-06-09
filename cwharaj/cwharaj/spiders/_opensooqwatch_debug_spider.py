# -*- coding: utf-8 -*-

import scrapy


class OpensooqDebugWatchSpider(scrapy.Spider):
    name = "opensooqwatch_debug"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com'
    ]

    start_urls = [
        # paginate
        "https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=",
        # detail
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._mstaml_Parse = MstamlParse()

        super(OpensooqDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(OpensooqDebugWatchSpider, cls).from_crawler(crawler,
                                                                 args,
                                                                 mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                                 )

    def parse(self, response):
        self._mstaml_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # item = self._mstaml_Parse.parse(response.url, response)
        # yield item
        # _row = self._cache_db.get_last_row("")
