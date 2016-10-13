# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy_webdriver.http import WebdriverRequest
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwotto.items import AliExpress
import urlparse


class OttoSpider(scrapy.Spider):
    name = "otto"
    allowed_domains = ["oto.com"]
    start_urls = [
        'https://www.otto.de/p/bruno-banani-blazer-im-uniform-look-512770595',
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(OttoSpider, self).__init__(name, **kwargs)


    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response, 0)
        yield item
