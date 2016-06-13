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
        'https://haraj.com.sa/1113951569/ساعات_واطقم_واساور_ومحافظ_ماركات_وصل_حديثا/'
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes

        self._cache_db = DatabaseFactory.get_database(CollectionTypes.cache,
                                                      kwargs['host'], kwargs['port'],
                                                      kwargs['user'], kwargs['passwd'],
                                                      kwargs['db'], kwargs['collection_name'])
        self._history_db = DatabaseFactory.get_database(CollectionTypes.history,
                                                        kwargs['host'], kwargs['port'],
                                                        kwargs['user'], kwargs['passwd'],
                                                        kwargs['db'], kwargs['collection_name'])

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
                                                                collection_name=crawler.settings.get('SQL_COLLECTION_NAME')
                                                                )

    def parse(self, response):
        # self._harajsa_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._harajsa_Parse.parse(response.url, response)
        yield item
        # _row = self._cache_db.get_last_row("")
