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
    allowed_domains = ["http://localhost:8888"]
    start_urls = [
        'http://localhost:8888/wordpress',
    ]

    def __init__(self, name=None, **kwargs):
        self.driver = webdriver.Firefox()

        from cwpoliticl.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

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
