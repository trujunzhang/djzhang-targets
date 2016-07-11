# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.http import XmlRpcRequest
from scrapy.selector import Selector, HtmlXPathSelector
from cwpoliticl.items import Politicl
import urlparse


class PoliticlsDebugSpider(scrapy.Spider):
    name = "politicl_debug"
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

        super(PoliticlsDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsDebugSpider, cls).from_crawler(crawler,
                                                             args,
                                                             mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                             )

    def parse(self, response):
        yield XmlRpcRequest("", self.parse_cluster)

        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
