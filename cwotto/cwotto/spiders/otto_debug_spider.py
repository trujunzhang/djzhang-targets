# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwotto.items import AliExpress
import urlparse

class AliExpresssDebugSpider(scrapy.Spider):
    name = "aliexpress_debug"
    allowed_domains = ["aliexpress.com"]
    start_urls = [
        'http://www.aliexpress.com/af/macbook-pro.html?ltype=wholesale&amp;d=y&amp;origin=n&amp;isViewCP=y&amp;catId=0&amp;initiative_id=SB_20160520233312&amp;SearchText=macbook+pro',
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(AliExpresssDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(AliExpresssDebugSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        yield WebdriverRequest(response.url, callback=self.parse_search_with_js)

    def parse_search_with_js(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
