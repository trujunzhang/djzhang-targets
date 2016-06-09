# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwetsy.items import Etsy
import urlparse


class EtsysSpider(scrapy.Spider):
    name = "etsy"
    allowed_domains = ["etsy.com"]
    start_urls = [
        'https://www.etsy.com/shop/ZendiazSilverwork?ref=condensed_trust_header_title_items',
    ]

    def __init__(self, name=None, **kwargs):
        from cwetsy.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwetsy.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(EtsysSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(EtsysSpider, cls).from_crawler(crawler,
                                                    args,
                                                    mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                    )

    def parse(self, response):
        # Parse the left navigation list
        category_hrefs = self._crawl_parser.parse_navigation(response.url, response)

        for href in category_hrefs:
            yield scrapy.Request(href, self.parse_listings)

    def parse_listings(self, response):
        # Get items from the listing page and then save items on the cache database.
        self._crawl_parser.parse_listings(response.url, response, self._cache_db)

        # Get the first cache item to parse the detail information
        detail_url = self._cache_db.get_next()
        yield scrapy.Request(detail_url, self.parse_detail)

    def parse_detail(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        # Get the first cache item to parse the detail information
        detail_url = self._cache_db.get_next(response.url)
        if detail_url:
            yield scrapy.Request(detail_url, self.parse_detail)
