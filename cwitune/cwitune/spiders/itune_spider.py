# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from cwitune.items import Itune
import urlparse


class ItunesSpider(scrapy.Spider):
    name = "itune"
    allowed_domains = ["itunes.apple.com"]
    start_urls = [
        'https://itunes.apple.com/us/genre/ios-food-drink/id6023?mt=8',
    ]

    def __init__(self, name=None, **kwargs):
        from cwitune.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwitune.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(ItunesSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(ItunesSpider, cls).from_crawler(crawler,
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



