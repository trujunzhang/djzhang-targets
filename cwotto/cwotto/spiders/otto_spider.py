# -*- coding: utf-8 -*-
from random import Random

import scrapy

from cwotto.items import Product


class OttoSpider(scrapy.Spider):
    name = "otto"
    allowed_domains = ["oto.com"]
    start_urls = [
        # Pagination
        'https://www.otto.de/damenmode/kategorien/blazer/kurzblazer/',
        #  Detail
        # 'https://www.otto.de/p/bruno-banani-blazer-im-uniform-look-512770595#variationId=512770596',
        # 'https://www.otto.de/p/sit-sideboard-corsica-breite-150-cm-562203065#variationId=562204027',
        # "https://www.otto.de/p/melrose-blazer-509995713/#variationId=509998431"
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.otto_parser import OttoParse
        self._crawl_parser = OttoParse()

        super(OttoSpider, self).__init__(name, **kwargs)

    def parse(self, response):
        url = response.request.url

        links = self._crawl_parser.parse_paginate(url, response)
        for link in links:
            yield scrapy.Request(link, self.parse_item, dont_filter=True)

    def parse_item(self, response):
        url = response.request.url

        from cwotto.utils.crawl_utils import CrawlUtils
        variation_id = CrawlUtils.get_variation_id(url)
        if variation_id:

            product = self._crawl_parser.parse_item(url, response, variation_id)

            if product:
                parent = product["parent"]
                if parent:
                    yield parent

                    children = product["children"]
                    for __child in children:
                        yield __child
