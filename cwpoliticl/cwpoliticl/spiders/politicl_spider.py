# -*- coding: utf-8 -*-

import scrapy
from scrapy.selector import Selector


class PoliticlsSpider(scrapy.Spider):
    name = "politicl"
    allowed_domains = ["xxx"]
    start_urls = [
        'http://www.dnaindia.com/analysis',
    ]

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.spiders.dispatch.spider_dispatch import SpiderDispatch
        self.spider_dispatch = SpiderDispatch()

        # Dynamic the domains and start url.
        self.allowed_domains = self.spider_dispatch.get_allowed_domains()
        self.start_urls = self.spider_dispatch.get_pagination_websites()

        super(PoliticlsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsSpider, cls).from_crawler(crawler,
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
        self._crawl_parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
