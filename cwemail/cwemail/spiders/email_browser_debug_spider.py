# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from selenium import webdriver
import time

from cwemail.items import Email
import urlparse


class EmailsBrowserDebugSpider(scrapy.Spider):
    name = "email_browser_debug"
    allowed_domains = ["https://verifyemail.mashape.com"]
    start_urls = [
        'https://verifyemail.p.mashape.com',
    ]

    def __init__(self, name=None, **kwargs):
        self.driver = webdriver.Firefox()

        from cwemail.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwemail.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(EmailsBrowserDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(EmailsBrowserDebugSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )
    def spider_closed(self, spider):
        self.driver.close()

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item
