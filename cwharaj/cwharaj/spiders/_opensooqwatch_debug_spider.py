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

        self._cache_db = DatabaseFactory.get_database(CollectionTypes.cache, kwargs['default_db_type'])
        self._history_db = DatabaseFactory.get_database(CollectionTypes.history, kwargs['default_db_type'])

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self.opensooq_parse = OpensooqParse()

        super(OpensooqDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(OpensooqDebugWatchSpider, cls).from_crawler(crawler,
                                                                 args,
                                                                 default_db_type=crawler.settings.get('DEFAULT_DB_TYPE')
                                                                 )

    def parse(self, response):
        self.opensooq_parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # item = self.opensooq_parse.parse(response.url, response)
        # yield item
        # _row = self._cache_db.get_last_row("")
