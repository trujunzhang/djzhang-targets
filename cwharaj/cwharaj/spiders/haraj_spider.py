# -*- coding: utf-8 -*-
import time

import scrapy

from cwharaj.items import HistoryItem


class HarajsSpider(scrapy.Spider):
    name = "haraj"

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.spiders.dispatch.spider_dispatch import SpiderDispatch
        self.spider_dispatch = SpiderDispatch()

        # Dynamic the domains
        self.allowed_domains = self.spider_dispatch.get_allowed_domains()

        # Get the start urls from the cache database
        row = self.get_row_from_cache("", "")
        if row:
            self.start_urls = [row['url']]

        super(HarajsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsSpider, cls).from_crawler(crawler,
                                                     args,
                                                     host=crawler.settings.get('SQL_HOST'),
                                                     port=crawler.settings.get('SQL_PORT'),
                                                     user=crawler.settings.get('SQL_USER'),
                                                     passwd=crawler.settings.get('SQL_PASSWD'),
                                                     db=crawler.settings.get('SQL_DB'),
                                                     collection_name=crawler.settings.get('SQL_COLLECTION_NAME')
                                                     )

    # This is entry point
    def parse(self, response):
        item = self.spider_dispatch.parse_from_detail_page(response.url, response, self._item_db)

        url_from = item['url_from']
        self._history_db.save_history(HistoryItem.get_default(url=response.url, id_ads=item["id_ads"],
                                                              url_from=url_from))

        # step 1: request the last row on the cache database
        row = self.get_row_from_cache(response.url, url_from)

        yield scrapy.Request(row['url'], callback=self.parse, dont_filter=True)

    def get_row_from_cache(self, _last, url_from):
        while True:
            _row = self._cache_db.get_oldest_row(_last, url_from)
            if _row:
                return _row

            # Return 'None' when the cache table is empty,
            # So we set the _last to empty string.
            _last = ""

            time.sleep(4)
