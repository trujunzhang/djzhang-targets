import json

from cwotto.parser.base_parser import BaseParser


class OttoBase(object):
    def __init__(self):
        super(OttoBase, self).__init__()

    def get_product_description(self, hxs):
        return BaseParser.extract_by_query(hxs, '//*[@class="article-properties-body"]')
        # return "description"

    def get_title(self, product_json, default_variation_id):
        __variation = product_json["variations"][default_variation_id]
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
        alternative_image_list_ = variation['alternativeImageList']
        if alternative_image_list_:
            _images = alternative_image_list_['images']
            if _images:
                for image in _images:
                    result.append(image['uriTemplate'])

        return result
