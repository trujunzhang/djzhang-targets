# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwpoliticl.items import Politicl
import urlparse


class PoliticlsSpider(scrapy.Spider):
    name = "politicl"
    allowed_domains = ["http://localhost:8888"]
    start_urls = [
        'http://localhost:8888/wordpress',
    ]

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwpoliticl.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(PoliticlsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        self._crawl_parser.parse_paginate(response.url, response, self._cache_db, self._history_db)

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



