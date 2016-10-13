from cwotto.items import Product
from cwotto.parser.base_parser import BaseParser

import urlparse
import time
import json


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

    def parse_item(self, url, hxs, variationId):
        productScript = self.extract_by_query(hxs, "//script[@id='productDataJson']").replace("</script>", "").replace(
            '<script id="productDataJson" type="application/json">', "")

        product_json = json.loads(productScript)

        return self._parse_via_json(hxs, product_json)

    def _parse_via_json(self, hxs, product_json):
        _variations = product_json["variations"]

        _title = _variations['name']

        _description = _variations['uniqueDescription']
        _reviewCount = self.extract_by_query(hxs, "//*[@itemprop='reviewCount']/@content")

        _price = self.extract_by_query(hxs, "//*[@itemprop='price']/@content")
        _oldPrice = 0
        _newPrice = 0

        _pictures = self._get_images_via_json(product_json)

        _colors = []

        _reviews = []

        item = Product(
            title=_title,
            description=_description,

            price=_price,
            oldPrice=_oldPrice,
            newPrice=_newPrice,

            pictures=_pictures,

            color=_colors,

            reviewCount=_reviewCount,
            reviews=_reviews,
        )

        return item

    def _get_images_via_json(self, product_json):
        pass
