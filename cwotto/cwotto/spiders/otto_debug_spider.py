# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
import urlparse


class OttoDebugSpider(scrapy.Spider):
    name = "otto_debug"
    allowed_domains = ["aliexpress.com"]
    start_urls = [
        'http://www.aliexpress.com/af/macbook-pro.html?ltype=wholesale&amp;d=y&amp;origin=n&amp;isViewCP=y&amp;catId=0&amp;initiative_id=SB_20160520233312&amp;SearchText=macbook+pro',
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(OttoDebugSpider, self).__init__(name, **kwargs)

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response, 0)
        yield item
