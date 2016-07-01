# -*- coding: utf-8 -*-

import scrapy


class OpensooqDebugCommentDateSpider(scrapy.Spider):
    name = "opensooq_commentdate_debug"
    allowed_domains = [
        "https://sa.opensooq.com/",
    ]

    opensooq_pagination = 'https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=&page={}'
    opensooq_pagination_start_page = 5000
    opensooq_pagination_total_page = 1000
    start_urls = [
        # paginate
        opensooq_pagination.format(opensooq_pagination_start_page)
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

        super(OpensooqDebugCommentDateSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(OpensooqDebugCommentDateSpider, cls).from_crawler(crawler,
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
        self.opensooq_pagination_start_page -= 1
        _next_pagination = self.opensooq_pagination.format(self.opensooq_pagination_start_page)

        yield scrapy.Request(_next_pagination, callback=self.parse, dont_filter=True)
