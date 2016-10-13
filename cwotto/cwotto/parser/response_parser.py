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

        return self._parse_via_json(hxs, url, product_json, variationId)

    def _parse_via_json(self, hxs, url, product_json, variationId):
        # using xpath query
        _reviewCount = self.extract_by_query(hxs, "//*[@itemprop='reviewCount']/@content")

        # parse from product_json
        _uniqueDescription = product_json['uniqueDescription']

        # parse by variationId
        __variation = product_json["variations"][variationId]

        _title = __variation['name']

        _retailPrice = __variation['retailPrice']
        _oldPrice = __variation['oldPrice']
        _normPrice = __variation['normPrice']

        _pictures = self._get_images_via_json(__variation)

        # distinctDimensions
        _distinctDimensions = self._get_distinctDimensions(product_json)
        _color = _distinctDimensions['colors']
        _sizes = _distinctDimensions['sizes']

        _reviews = []

        item = Product(
            url=url,

            title=_title,
            uniqueDescription=_uniqueDescription,

            retailPrice=_retailPrice,
            oldPrice=_oldPrice,
            normPrice=_normPrice,

            pictures=_pictures,

            color=_color,
            sizes=_sizes,

            reviewCount=_reviewCount,
            reviews=_reviews,
        )

        return item

    def _get_images_via_json(self, __variation):
        firstImage = __variation["images"]
        result = []
        _images = __variation["alternativeImageList"]["images"]
        if firstImage:
            _images.insert(0, firstImage)
        for img in _images:
            _uri = img['uriTemplate'].replace('#ft5_slash#', '/').replace('?${format}$', '')
            result.append(_uri)

        return result

    def _get_distinctDimensions(self, product_json):
        result = {}

        _distinctDimensions = product_json['distinctDimensions']
        for block in _distinctDimensions:
            type = block['type']
            if type == "color":
                result['color'] = block['values']
            if type == "size":
                result['size'] = block['values']

        return result

    def _get_sizes(self, json):
        pass

    def _get_colors(self, json):
        result = []
        values = json['values']
        for value in values:
            pass

        return result
