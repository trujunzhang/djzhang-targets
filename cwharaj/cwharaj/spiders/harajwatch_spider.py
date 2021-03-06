# -*- coding: utf-8 -*-
import scrapy


class HarajsSpiderWatch(scrapy.Spider):
    name = "haraj_watch"

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.spiders.dispatch.spider_watch_dispatch import SpiderWatchDispatch
        self.watch_dispatch = SpiderWatchDispatch()

        # Dynamic the domains and start url.
        self.allowed_domains = self.watch_dispatch.get_allowed_domains()
        self.start_urls = self.watch_dispatch.get_pagination_websites()

        super(HarajsSpiderWatch, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsSpiderWatch, cls).from_crawler(crawler,
                                                          args,
                                                          host=crawler.settings.get('SQL_HOST'),
                                                          port=crawler.settings.get('SQL_PORT'),
                                                          user=crawler.settings.get('SQL_USER'),
                                                          passwd=crawler.settings.get('SQL_PASSWD'),
                                                          db=crawler.settings.get('SQL_DB'),
                                                          collection_name=crawler.settings.get('SQL_COLLECTION_NAME')
                                                          )

    # This method is entry point
    def parse(self, response):
        self.watch_dispatch.parse_from_pagination(response.url, response, self._cache_db, self._history_db)

        yield scrapy.Request(response.url, callback=self.parse, dont_filter=True)
