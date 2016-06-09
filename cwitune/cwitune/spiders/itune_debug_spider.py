# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from cwitune.items import Itune
import urlparse


class ItunesDebugSpider(scrapy.Spider):
    name = "itune_debug"
    allowed_domains = ["itunes.apple.com"]
    start_urls = [
        'https://itunes.apple.com/us/app/postmates/id512393983?mt=8',
    ]

    def __init__(self, name=None, **kwargs):
        from cwitune.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwitune.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(ItunesDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(ItunesDebugSpider, cls).from_crawler(crawler,
                                                          args,
                                                          mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                          )

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
