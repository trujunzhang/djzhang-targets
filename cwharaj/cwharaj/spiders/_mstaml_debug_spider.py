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
        # 'http://www.mstaml.com/2073561/%D9%84%D9%84%D8%A8%D9%8A%D8%B9_%D8%AC%D9%85%D8%B3_%D9%8A%D9%88%D9%83%D9%86_1999/'
        # 'http://www.mstaml.com/2073595/%D9%84%D9%84%D8%A8%D9%8A%D8%B9_%D9%82%D8%B7%D8%B7_%D8%AA%D8%B1%D9%83%D9%8A%D9%87'
        # contains emoji unicode
        # 'http://www.mstaml.com/2073595/للبيع_قطط_تركيه/'
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._mstaml_Parse = MstamlParse()

        super(MstamlDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(MstamlDebugWatchSpider, cls).from_crawler(crawler,
                                                               args,
                                                               host=crawler.settings.get('SQL_HOST'),
                                                               port=crawler.settings.get('SQL_PORT'),
                                                               user=crawler.settings.get('SQL_USER'),
                                                               passwd=crawler.settings.get('SQL_PASSWD'),
                                                               db=crawler.settings.get('SQL_DB'),
                                                               collection_name=crawler.settings.get('SQL_COLLECTION_NAME')
                                                               )

    def parse(self, response):
        # self._mstaml_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._mstaml_Parse.parse(response.url, response)
        # yield item
        # _row = self._cache_db.get_last_row("")
