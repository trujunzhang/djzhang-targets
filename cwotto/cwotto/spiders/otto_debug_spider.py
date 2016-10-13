# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
import urlparse


class OttoDebugSpider(scrapy.Spider):
    name = "otto_debug"

    allowed_domains = ["oto.com"]
    start_urls = [
        # Pagination
        # 'https://www.otto.de/damenmode/kategorien/blazer/kurzblazer/',
        #  Detail
        #  only one image
        'https://www.otto.de/p/blazer-515032920/#variationId=515032942',
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(OttoDebugSpider, self).__init__(name, **kwargs)

    def parse_item(self, response):
        url = response.request.url
        split = url.split("#")
        if len(split) == 2:
            para = split[1]
            s = para.split('=')
            if len(s) == 2:
                variationId = s[1]

                item = self._crawl_parser.parse_item(url, response, variationId)
                yield item
