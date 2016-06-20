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
        # 'https://haraj.com.sa',
        # Details
        # 'https://haraj.com.sa/1113951569/ساعات_واطقم_واساور_ومحافظ_ماركات_وصل_حديثا/'
        # 'https://haraj.com.sa/1111841958/%D9%83%D8%A7%D8%B4%D9%81_%D8%A7%D9%84%D8%B5%D8%A8%D8%BA_%D9%88%D8%A7%D9%84%D8%B3%D9%85%D9%83%D8%B1%D8%A9_%D8%A7%D9%84%D8%A7%D9%84%D9%85%D8%A7%D9%86%D9%8A_%D8%A7%D9%84%D9%87%D8%A7%D9%86%D8%AF%D9%8A/'
        # fix parsing pictures
        # 'https://haraj.com.sa/1113955610/%D8%A7%D8%B1%D8%B6_%D9%84%D9%84%D8%A8%D9%8A%D8%B9_%D9%81%D9%8A_%D8%AD%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%D8%A9_%D9%81%D9%8A_%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9/'
        # fix parsing time
        # 'https://haraj.com.sa/1113956653/LG_G4_/'
        # Section
        'https://haraj.com.sa/1114020535/%D8%A7%D9%84%D9%85%D8%AD%D9%81%D8%B8%D8%A9_%D8%A7%D9%84%D9%85%D8%AB%D8%A7%D9%84%D9%8A%D8%A9/'
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.parser.harajsa_parser import HarajSaParse
        self._harajsa_Parse = HarajSaParse()

        super(HarajsaDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsaDebugWatchSpider, cls).from_crawler(crawler,
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
        # self._harajsa_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._harajsa_Parse.parse(response.url, response, self._item_db)
        # yield item
        # _row = self._cache_db.get_last_row("")
