# -*- coding: utf-8 -*-

import scrapy
from scrapy.selector import Selector


class PoliticlsWatchSpider(scrapy.Spider):
    name = "politicl_watch"

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.spiders.dispatch.spider_watch_dispatch import SpiderWatchDispatch
        self.watch_dispatch = SpiderWatchDispatch()

        # Dynamic the domains and start url.
        self.allowed_domains = self.watch_dispatch.get_allowed_domains()
        self.start_urls = self.watch_dispatch.get_pagination_websites()

        super(PoliticlsWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsWatchSpider, cls).from_crawler(crawler,
                                                             args,
                                                             host=crawler.settings.get('SQL_HOST'),
                                                             port=crawler.settings.get('SQL_PORT'),
                                                             user=crawler.settings.get('SQL_USER'),
                                                             passwd=crawler.settings.get('SQL_PASSWD'),
                                                             db=crawler.settings.get('SQL_DB'),
                                                             collection_name=crawler.settings.get(
                                                                 'SQL_COLLECTION_NAME')
                                                             )

    # This methond is entry point
    def parse(self, response):
        self.watch_dispatch.parse_from_pagination(response.url, response, self._cache_db, self._history_db)
