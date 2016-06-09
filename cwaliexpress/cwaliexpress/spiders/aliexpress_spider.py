# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwaliexpress.items import AliExpress
import urlparse


class AliExpresssSpider(scrapy.Spider):
    name = "aliexpress"
    allowed_domains = ["aliexpress.com"]
    start_urls = [
        'http://www.aliexpress.com/af/macbook-pro.html?ltype=wholesale&amp;d=y&amp;origin=n&amp;isViewCP=y&amp;catId=0&amp;initiative_id=SB_20160520233312&amp;SearchText=macbook+pro',
    ]

    def __init__(self, name=None, **kwargs):
        from cwaliexpress.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwaliexpress.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(AliExpresssSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(AliExpresssSpider, cls).from_crawler(crawler,
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
