# -*- coding: utf-8 -*-
from random import Random

import scrapy
from cwotto.items import Product


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
        item = self._crawl_parser.parse_item(response.url, response)
        yield item
