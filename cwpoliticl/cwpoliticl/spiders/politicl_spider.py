# -*- coding: utf-8 -*-

import logging

import scrapy

from cwpoliticl.items import HistoryItem


class PoliticlsSpider(scrapy.Spider):
    name = "politicl"

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.extensions.rpc.wordpress_xml_rpc_utils import WDXmlRPCUtils
        self.wd_rpc = WDXmlRPCUtils(kwargs['wd_host'], kwargs['wd_user'], kwargs['wd_passwd'])

        from cwpoliticl.spiders.dispatch.spider_dispatch import SpiderDispatch
        self.spider_dispatch = SpiderDispatch()

        # Dynamic the domains
        self.allowed_domains = self.spider_dispatch.get_allowed_domains()

        # Get the start urls from the cache database
        cache = self.get_row_from_cache()
        if cache:
            self.start_urls = [cache['url']]
        else:
            logging.debug("Not found the caches currently, the schedulared task end!")

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
                                                            'SQL_COLLECTION_NAME'),
                                                        wd_host=crawler.settings.get('WD_HOST'),
                                                        wd_user=crawler.settings.get('WD_USER'),
                                                        wd_passwd=crawler.settings.get('WD_PASSWD')
                                                        )

    def parse(self, response):
        self._cache_db.get_oldest_row(last, url_from)
        item = self.spider_dispatch.parse_from_detail_page(response.url, response, self.wd_rpc)
        if item:
            self._history_db.save_history(HistoryItem.get_default(url=response.url))

            # step 1: request the last row on the cache database
            row = self.get_row_from_cache(item['url'], item['url_from'])
            if row:
                yield scrapy.Request(row['url'], callback=self.parse, dont_filter=True)
            else:
                logging.debug("Not found the caches currently, the schedulared task end!")

        else:
            logging.debug("Parse the detailed page failure, {}!".format(response.url))

    def get_row_from_cache(self, last='', url_from=''):
        return self._cache_db.get_oldest_row(last, url_from)
