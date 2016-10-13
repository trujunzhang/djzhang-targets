# -*- coding: utf-8 -*-
import scrapy


class OttoDebugSpider(scrapy.Spider):
    name = "otto_debug"

    allowed_domains = ["oto.com"]
    start_urls = [
        # Pagination
        # 'https://www.otto.de/damenmode/kategorien/blazer/kurzblazer/',
        #  Detail
        #  only one image
        # 'https://www.otto.de/p/blazer-515032920/#variationId=515032942',
        # 'Apple iPhone SE 4" 64 GB'
        # product
        # 'https://www.otto.de/p/apple-iphone-se-64gb-smartphone-10-1-cm-4-zoll-display-lte-4g-ios-9-12-0-megapixel-nfc-535544120/#variationId=535544121'
        # reviews
        'https://www.otto.de/p/apple-iphone-se-64gb-smartphone-10-1-cm-4-zoll-display-lte-4g-ios-9-12-0-megapixel-nfc-535544120-kundenbewertungen/#variationId=535544121'
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(OttoDebugSpider, self).__init__(name, **kwargs)

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
