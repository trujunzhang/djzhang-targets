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
        # 'http://www.mstaml.com/2073561/للبيع_جمس_يوكن_1999/'
        # 'http://www.mstaml.com/2078991/للبيع_اكسبلورر_أبيض_2010_وارد_توكيلات_الجزيرة/'
        # contains emoji unicode
        'http://www.mstaml.com/2073595/للبيع_قطط_تركيه/'
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
                                                               collection_name=crawler.settings.get(
                                                                   'SQL_COLLECTION_NAME')
                                                               )

    def parse(self, response):
        # self._mstaml_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._mstaml_Parse.parse(response.url, response, self._item_db)
