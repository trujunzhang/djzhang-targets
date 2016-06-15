# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwgooglelinkedin.items import GoogleLinkedIn
import urlparse


class GoogleLinkedInsDebugSpider(scrapy.Spider):
    name = "googlelinkedin_debug"
    allowed_domains = ["google.com"]
    start_urls = [
        'www.google.com',
    ]

    def __init__(self, name=None, **kwargs):
        from cwgooglelinkedin.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwgooglelinkedin.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(GoogleLinkedInsDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(GoogleLinkedInsDebugSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
