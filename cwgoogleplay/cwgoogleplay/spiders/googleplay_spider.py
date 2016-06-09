# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from cwgoogleplay.items import GooglePlay
import urlparse


class GoogleplaySpider(scrapy.Spider):
    name = "googleplay"
    allowed_domains = ["play.google.com"]
    start_urls = [
        'https://play.google.com/store/apps/collection/topselling_new_paid',
    ]

    def __init__(self, name=None, **kwargs):
        from cwgoogleplay.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwgoogleplay.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(GoogleplaySpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(GoogleplaySpider, cls).from_crawler(crawler,
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

        len__ = navs.__len__()
        if not len__ == 0:
            index = Random().randint(0, (len__ - 1))
            if index > 0 & index < len__:
                hxs = navs.__getitem__(index)
                extractedLink = hxs.xpath(select + '//@href')[index].extract()
                relativeAppLink = urlparse.urljoin(response.url, extractedLink.strip())
                if not self.dbutils.check_exist_and_save(relativeAppLink):
                    yield scrapy.Request(relativeAppLink, self.parse_detail)

    def parse_cluster(self, response):
        _seen = set()

        hxs = HtmlXPathSelector(response)
        links = hxs.select('//div/a[@class="card-click-target"]/@href').extract()
        count = 0
        for link in links:
            appLink = urlparse.urljoin(response.url, link.strip())
            if appLink in _seen:
                self.log('already seen')
            else:
                _seen.add(appLink)
                if not self.dbutils.check_exist_and_save(appLink):
                    yield scrapy.Request(appLink, self.parse_detail)

            count += 1
