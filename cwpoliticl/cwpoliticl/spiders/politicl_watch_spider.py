# -*- coding: utf-8 -*-

import scrapy
from scrapy.selector import Selector


# yield WebdriverRequest(_url, callback=self.parse_category_full_page)


class PoliticlsWatchSpider(scrapy.Spider):
    name = "politicl_watch"
    allowed_domains = ["xxx"]
    start_urls = [
        'http://www.dnaindia.com/analysis',
    ]

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwpoliticl.parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(PoliticlsWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsWatchSpider, cls).from_crawler(crawler,
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
