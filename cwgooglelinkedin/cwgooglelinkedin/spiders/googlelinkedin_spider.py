# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwgooglelinkedin.items import GoogleLinkedIn
import urlparse


class GoogleLinkedInsSpider(scrapy.Spider):
    name = "googlelinkedin"
    allowed_domains = ["google.com"]
    start_urls = [
        'https://www.google.com/search?num=100&biw=1884&bih=1082&q=%22Small+Tree+*+*+*+*+*+manager%22+site%3Alinkedin.com%2Fin+-dir&oq=%22Small+Tree+*+*+*+*+*+manager%22+site%3Alinkedin.com%2Fin+-dir&gs_l=serp.3...7364.20727.0.21133.26.23.3.0.0.0.289.3356.0j14j3.17.0....0...1c.1.64.serp..8.0.0.KLxLM9h-CgA',
    ]

    def __init__(self, name=None, **kwargs):
        from cwgooglelinkedin.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwgooglelinkedin.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(GoogleLinkedInsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(GoogleLinkedInsSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        self._crawl_parser.parse_paginate(response.url, response)

    def parse_detail(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        yield scrapy.Request(item['cluster'], self.parse_cluster)

        # yield scrapy.Request(response.url, self.parse_relatived_app)

        # the below is that crawl a random relatived app.
        select = '//a[@class="card-click-target"]'
        sel = Selector(response)
        navs = sel.xpath(select)

        if not self._history_db.check_exist(abstractPath):
           yield scrapy.Request(abstractPath, self.parse_detail, meta={'type': title})



