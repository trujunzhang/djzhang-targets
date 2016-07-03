# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwemail.items import Email
import urlparse


class EmailsSpider(scrapy.Spider):
    name = "email"
    allowed_domains = ["https://verifyemail.mashape.com"]
    start_urls = [
        'https://verifyemail.p.mashape.com',
    ]

    def __init__(self, name=None, **kwargs):
        from cwemail.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwemail.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(EmailsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(EmailsSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        self._crawl_parser.parse_paginate(response.url, response, self._cache_db, self._history_db)

    def parse_detail(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item



