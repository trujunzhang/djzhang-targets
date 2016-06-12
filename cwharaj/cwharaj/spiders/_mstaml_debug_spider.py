# -*- coding: utf-8 -*-
import scrapy


class MstamlDebugWatchSpider(scrapy.Spider):
    name = "mstaml_debug"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com'
    ]

    start_urls = [
        # paginate
        # 'http://www.mstaml.com/market/?t=0&l=0&d=0&x=&u=&o=3',
        # Details
        'http://www.mstaml.com/2072283/%D8%B9%D8%B1%D9%88%D8%B6_%D8%AE%D8%A7%D8%B5%D8%A9_%D8%AC%D8%AF%D8%A7_%D9%85%D9%86_%D9%82%D9%85%D8%B1%D8%A9_%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%85_%D8%A7%D9%84%D8%A5%D8%AD%D8%AA%D9%81%D8%A7%D9%84%D8%A7%D8%AA_%D8%A8%D8%AC%D8%AF%D8%A9/'
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes

        self._cache_db = DatabaseFactory.get_database(CollectionTypes.cache, kwargs['default_db_type'])
        self._history_db = DatabaseFactory.get_database(CollectionTypes.history, kwargs['default_db_type'])

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._mstaml_Parse = MstamlParse()

        super(MstamlDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(MstamlDebugWatchSpider, cls).from_crawler(crawler,
                                                               args,
                                                               default_db_type=crawler.settings.get('DEFAULT_DB_TYPE')
                                                               )

    def parse(self, response):
        # self._mstaml_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._mstaml_Parse.parse(response.url, response)
        yield item
        # _row = self._cache_db.get_last_row("")
