# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwetsy.items import Etsy
import urlparse


class EtsysDebugSpider(scrapy.Spider):
    name = "etsy_debug"
    allowed_domains = ["etsy.com"]
    start_urls = [
        # 'https://www.etsy.com/shop/ZendiazSilverwork?ref=condensed_trust_header_title_items',
        'https://www.etsy.com/listing/249890069/silver-925-upper-arm-cuff-arm-band?ref=shop_home_active_1',
    ]

    navigation_url = 'https://www.etsy.com/c/jewelry/body-jewelry/arm-bands?page={}'
    current_navigation = 1
    total_pages = 0

    def __init__(self, name=None, **kwargs):
        from cwetsy.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwetsy.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(EtsysDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(EtsysDebugSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        detail_url = self._cache_db.get_next(
            'https://www.etsy.com/listing/249890069/silver-925-upper-arm-cuff-arm-band?ref=shop_home_active_1')

        yield scrapy.Request(detail_url, self.parse_detail)

    def parse_detail(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self.total_pages += 1
        if self.total_pages <= 3:
            # Get the first cache item to parse the detail information
            detail_url = self._cache_db.get_next(response.url)
            yield scrapy.Request(detail_url, self.parse_detail)

    def parse_navigation(self, response):
        category_hrefs = self._crawl_parser.parse_navigation(response.url, response)

        for href in category_hrefs:
            yield scrapy.Request(href, self.parse_listings)

            # if self.current_navigation <= 4:
            #     next_page_url = self.navigation_url.format(self.current_navigation)
            #     self.current_navigation += 1
            #     yield scrapy.Request(next_page_url, self.parse)

    def parse_listings(self, response):
        self._crawl_parser.parse_listings(response.url, response, self._cache_db)
