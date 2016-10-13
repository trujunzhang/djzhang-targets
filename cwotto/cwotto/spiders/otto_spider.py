# -*- coding: utf-8 -*-
from random import Random
from urlparse import urlparse

import scrapy
from scrapy.linkextractors.sgml import SgmlLinkExtractor
from scrapy.spiders import Rule

from cwotto.items import Product


class OttoSpider(scrapy.Spider):
    name = "otto"
    allowed_domains = ["oto.com"]
    start_urls = [
        # 'https://www.otto.de/p/bruno-banani-blazer-im-uniform-look-512770595#variationId=512770596',
        'https://www.otto.de/p/sit-sideboard-corsica-breite-150-cm-562203065#variationId=562204027',
        # "https://www.otto.de/p/melrose-blazer-509995713/#variationId=509998431"
    ]

    rules = (
        Rule(
            SgmlLinkExtractor(
                allow=(".*/p/.*#variationId.*",), ),
            callback="parse_items",
            process_links="filter_links",
            follow=True),
    )

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(OttoSpider, self).__init__(name, **kwargs)

    def filter_links(self, links):
        baseDomain = self.get_base_domain(self.response_url)
        filteredLinks = []
        for link in links:
            if link.url.find(baseDomain) < 0:
                filteredLinks.append(link)
        return filteredLinks

    def get_base_domain(self, url):
        base = urlparse(url).netloc
        if base.upper().startswith("WWW."):
            base = base[4:]
        elif base.upper().startswith("FTP."):
            base = base[4:]
        # drop any ports
        base = base.split(':')[0]

        return base

    def parse(self, response):
        url = response.request.url
        split = url.split("#")
        if len(split) == 2:
            para = split[1]
            s = para.split('=')
            if len(s) == 2:
                variationId = s[1]

                item = self._crawl_parser.parse_item(url, response, variationId)
                yield item
