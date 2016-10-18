import json

from cwotto.parser.base_parser import BaseParser


class OttoBase(object):
    def __init__(self, product_json, default_variationId=None):
        self.product_json = product_json
        self.default_variationId = default_variationId
        super(OttoBase, self).__init__()

    def get_product_description(self):
        # return BaseParser.extract_by_query(self.hxs, '//*[@class="article-properties-body"]')
        return "description"

    def get_title(self):
        __variation = self.product_json["variations"][self.default_variationId]
        _title = __variation['name']
        return _title

    def get_child_link(self, variation):
        url = ""
        __links = variation['links']
        for link in __links:
            url = link['link']['href']

        return url

    def get_product_gallery(self, variation):
        result = []
        _images = variation['alternativeImageList']['images']
        for image in _images:
            result.append(image['uriTemplate'])

        return result
