# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwotto.items import AliExpress
import urlparse


class AliExpresssSpider(scrapy.Spider):
    name = "otto"
    allowed_domains = ["oto.com"]
    start_urls = [
        'https://www.otto.de/p/bruno-banani-blazer-im-uniform-look-512770595',
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(AliExpresssSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(AliExpresssSpider, cls).from_crawler(crawler,
                                                          args,
                                                          mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                          )

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response, 0)
        yield item
