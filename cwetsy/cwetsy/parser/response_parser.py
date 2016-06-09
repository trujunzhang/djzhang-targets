from cwetsy.items import Etsy
from cwetsy.parser.base_parser import BaseParser

import urlparse


class ResponseParse(BaseParser):
    def __init__(self):
        super(ResponseParse, self).__init__()

    def parse_paginate(self, url, hxs, cache_db):
        links = hxs.select('//a[@class="card-click-target"]/@href').extract()
        count = 0
        for link in links:
            appLink = urlparse.urljoin(url, link.strip())
            cache_db.process_item(url)
            count += 1

    def parse_navigation(self, url, hxs):
        detail_hrefs = hxs.xpath('//*[@class="list-nav mb-xs-6 hide-xs hide-sm hide-md"]/li/a/@href').extract()

        category_hrefs = []
        for href in detail_hrefs:
            if "section_id" in href:
                category_href = urlparse.urljoin(url, href.strip())
                category_hrefs.append(category_href)

        return category_hrefs

    def parse_listings(self, url, hxs, _cache_db):
        detail_hrefs = hxs.xpath('//*[@class="listing-cards block-grid-xs-2 block-grid-md-3 block-grid-no-whitespace mb-xs-3"]/div/a/@href').extract()

        for href in detail_hrefs:
            _cache_db.process_item(href)

    def parse(self, url, hxs):

        title = self.get_value_from_response(hxs, '//*[@itemprop="name"]/text()', 0)

        currencyValue = self.get_value_from_response(hxs, '//*[@class="currency-value"]/text()', 0)
        reviews = self.get_value_from_response(hxs, '//*[@id="item-overview"]/*[@class="properties"]/li[4]/a/text()', 0)
        favorites = self.get_value_from_response(hxs, '//*[@id="item-overview"]/*[@class="properties"]/li[5]/a/text()',
                                                 0)
        description = self.get_value_from_response(hxs, '//*[@id="description-text"]/text()', 0)
        images = hxs.xpath('//*[@id="image-main"]/ul/li/@data-full-image-href').extract()

        item = Etsy(
            url=url,
            title=title,
            currencyValue=currencyValue,
            reviews=reviews,
            favorites=favorites,
            description=description,
            images=images
        )

        return item
