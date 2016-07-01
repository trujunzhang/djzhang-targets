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
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self.opensooq_parse = OpensooqParse()

        super(OpensooqDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(OpensooqDebugWatchSpider, cls).from_crawler(crawler,
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
        self.opensooq_parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self.opensooq_parse.parse(response.url, response, self._item_db)
        # yield item
        # _row = self._cache_db.get_last_row("")
