# -*- coding: utf-8 -*-

import logging

import scrapy


class JetBrainssWatchSpider(scrapy.Spider):
    name = "jetbrains_whole_pages"

    def __init__(self, name=None, **kwargs):
        from cwjetbrains.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._page_db = database_factory.get_database(CollectionTypes.page)

        from cwjetbrains.spiders.dispatch.spider_whole_pages_dispatch import SpiderWholePageDispatch
        self.whole_pages_dispatch = SpiderWholePageDispatch(self._page_db)

        # Dynamic the domains and start url.
        self.allowed_domains = self.whole_pages_dispatch.get_allowed_domains()
        page_url = self.whole_pages_dispatch.get_next_page_url()
        if page_url:
            self.start_urls = [page_url]
        else:
            logging.debug("Not found the page currently, the schedulared task end!")

        super(JetBrainssWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(JetBrainssWatchSpider, cls).from_crawler(crawler,
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
        # Step 1: parsing the pagination.
        self.whole_pages_dispatch.parse_from_pagination(response.url, response, self._cache_db, self._history_db)

        # Step 2: Check the next page from the page database.
        url = self.whole_pages_dispatch.get_next_page_url()
        if url:
            pass
        else:
            logging.debug("Scraped the {} pages currently, the schedulared task end!".format(10))
