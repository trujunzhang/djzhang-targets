# -*- coding: utf-8 -*-
import scrapy


class OttoWDSpider(scrapy.Spider):
    name = "otto_wd"

    allowed_domains = ["oto.com"]
    start_urls = [
        # Homepage
        # 'https://www.otto.de/'
        # the same first page
        'https://www.otto.de/waesche-bademode/herrenwaesche/nachtwaesche'
        'https://www.otto.de/waesche-bademode/herrenwaesche/nachtwaesche/?1=2&ps=72'
        # second page
        'https://www.otto.de/waesche-bademode/herrenwaesche/nachtwaesche/?p=2&ps=72'
        # Pagination
        # 'https://www.otto.de/damenmode/kategorien/blazer/kurzblazer/',
        #  Detail
        #  only one image
        # 'https://www.otto.de/p/blazer-515032920/#variationId=515032942',
        # 'Apple iPhone SE 4" 64 GB'
        # product
        # 'https://www.otto.de/p/apple-iphone-se-64gb-smartphone-10-1-cm-4-zoll-display-lte-4g-ios-9-12-0-megapixel-nfc-535544120/#variationId=535544121'
        # reviews
        # 'https://www.otto.de/p/apple-iphone-se-64gb-smartphone-10-1-cm-4-zoll-display-lte-4g-ios-9-12-0-megapixel-nfc-535544120-kundenbewertungen/#variationId=535544121'
        # json
        # 'https://www.otto.de/product-customerreview/reviews/presentation/product/535544120',
        # 'https://www.otto.de/ts-rcv/?cachefix=aJ30JvrjbG7&url=%2Fp%2Fapple-iphone-se-64gb-smartphone-10-1-cm-4-zoll-display-lte-4g-ios-9-12-0-megapixel-nfc-535544120-kundenbewertungen%2F&ts_Type=event&scid=1476350145834&psfids=44ad5f11e5c534d65f4ee2da5e6e2ec7318613032&dataContainer=%7B%22product_ExpanderReview%22%3A%22open%22%2C%22product_ReviewCount%22%3A197%2C%22product_FilterReview%22%3A%22initial%22%2C%22product_ReviewAction%22%3A%22expand%22%2C%22product_VariationId%22%3A%22535544121%22%2C%22ot_PageCluster%22%3A%22Kundenbewertungsseite%22%2C%22ts_Innersize%22%3A%221440x311%22%2C%22ts_Screen%22%3A%221440x900%22%2C%22ot_Orientation%22%3A%22landscape%22%2C%22ot_Breakpoint%22%3A%22XL%22%7D',
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(OttoWDSpider, self).__init__(name, **kwargs)

    def parse(self, response):
        url = response.request.url
        split = url.split("#")
        if len(split) == 2:
            para = split[1]
            s = para.split('=')
            if len(s) == 2:
                variationId = s[1]

                item = self._crawl_parser.parse_item(url, response, variationId)
