from cwotto.items import Product
from cwotto.parser.base_parser import BaseParser

import urlparse
import time
import json

from cwotto.parser.review_fetcher import ReviewFetcher


class ResponseParse(BaseParser):
    def __init__(self):
        super(ResponseParse, self).__init__()

    def parse_paginate(self, url, hxs):
        product_links = []
        links = hxs.xpath('//*[@class="product small"]/a/@href').extract()
        count = 0
        for link in links:
            if count >= 10:
                break
            count = count + 1
            appLink = urlparse.urljoin(url, link.strip())
            product_links.append(appLink)

        return product_links

    def parse_item(self, url, hxs, variationId):
        productScript = self.extract_by_query(hxs, "//script[@id='productDataJson']").replace("</script>", "").replace(
            '<script id="productDataJson" type="application/json">', "")

        productScript = productScript.replace('#ft5_slash#', '/')
        productScript = productScript.replace('?$articlecolorthumbsmall$', '')
        productScript = productScript.replace('?${format}$', '')

        product_json = json.loads(productScript)

        return self._parse_via_json(hxs, url, product_json, variationId)

    def _parse_via_json(self, hxs, url, product_json, variationId):
        product_id = product_json['id']

        # using xpath query
        _reviewCount = self.extract_by_query(hxs, "//*[@itemprop='reviewCount']/@content", default=0)

        # parse from product_json
        _uniqueHtmlDetails = product_json['uniqueHtmlDetails']

        # parse by variationId
        __variation = product_json["variations"][variationId]

        _title = __variation['name']

        _retailPrice = __variation['retailPrice']
        _oldPrice = __variation['oldPrice']
        _normPrice = __variation['normPrice']

        _pictures = self._get_images_via_json(__variation)

        # distinctDimensions
        _distinctDimensions = self._get_distinctDimensions(product_json)
        _color = _distinctDimensions['color']
        _sizes = _distinctDimensions['size']

        reviewFetcher = ReviewFetcher(product_id)
        # _reviews = reviewFetcher.fetch_reviews_as_json()
        _reviews = []

        item = Product(
            url=url,

            title=_title,
            uniqueHtmlDetails=_uniqueHtmlDetails,

            retailPrice=_retailPrice,
            oldPrice=_oldPrice,
            normPrice=_normPrice,

            pictures=_pictures,

            color=_color,
            sizes=_sizes,

            reviewCount=_reviewCount,
            reviews=_reviews,

            post_id=product_id,
            post_type="product",
            post_parent=0
        )

        return item

    def _get_images_via_json(self, __variation):
        result = []
        _images = []

        # alternativeImageList
        _alternativeImageList = __variation["alternativeImageList"]
        if _alternativeImageList:
            _images = _alternativeImageList["images"]

        # default image
        firstImage = __variation["images"]
        if firstImage:
            _images.insert(0, firstImage)

        # parse images to array
        for img in _images:
            _uri = img['uriTemplate']
            if _uri:
                result.append(_uri)

        return result

    def _get_distinctDimensions(self, product_json):
        result = {"color": [], "size": []}

        _distinctDimensions = product_json['distinctDimensions']
        for block in _distinctDimensions:
            type = block['type']
            if type == "color":
                result['color'] = self._get_colors(block)
            if type == "size":
                result['size'] = self._get_sizes(block)

        return result

    def _get_sizes(self, block):
        result = []

        values = block['values']
        for value in values:
            result.append(values)

        return result

    def _get_colors(self, block):
        result = []
        values = block['values']
        for value in values:
            result.append(values)

        return result
