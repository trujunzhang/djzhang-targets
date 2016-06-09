# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from selenium import webdriver
import time

from cwaliexpress.items import AliExpress
import urlparse


class AliExpresssBrowserDebugSpider(scrapy.Spider):
    name = "aliexpress_browser_debug"
    allowed_domains = ["aliexpress.com"]
    start_urls = [
        'http://www.aliexpress.com/'
    ]

    def __init__(self, name=None, **kwargs):
        self.driver = webdriver.Firefox()

        from cwaliexpress.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwaliexpress.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(AliExpresssBrowserDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(AliExpresssBrowserDebugSpider, cls).from_crawler(crawler,
                                                                      args,
                                                                      mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                                      )

    def spider_closed(self, spider):
        self.driver.close()

    def parse(self, response):
        self.driver.get(response.url)
        time.sleep(4)

        self._crawl_parser.submit_search(self.driver)


        _href = self._crawl_parser.get_category_href(self.driver)
        _total_count = 0
        _page_number = 1
        while True:

            pass
        self.driver.get(_href)
        time.sleep(1)

        self._crawl_parser.get_items_from_pagenate(self.driver)
