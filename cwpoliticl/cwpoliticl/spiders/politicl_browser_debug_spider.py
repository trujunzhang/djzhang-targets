# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from selenium import webdriver
import time

from cwpoliticl.items import Politicl
import urlparse


class PoliticlsBrowserDebugSpider(scrapy.Spider):
    name = "politicl_browser_debug"
    allowed_domains = ["xxx"]
    start_urls = [
        'yyy',
    ]

    def __init__(self, name=None, **kwargs):
        self.driver = webdriver.Firefox()

        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwpoliticl.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(PoliticlsBrowserDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsBrowserDebugSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )
    def spider_closed(self, spider):
        self.driver.close()

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item
