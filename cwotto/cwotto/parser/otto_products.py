import json

from cwotto.parser.products.otto_variations_parser import OttoVariationsParser


class OttoProducts(object):
    def __init__(self, hxs, url, product_json, variationId):
        self.hxs = hxs
        self.url = url
        self.product_json = product_json
        self.variationId = variationId
        super(OttoProducts, self).__init__()

    def get_product_description(self):
        # return BaseParser.extract_by_query(self.hxs, '//*[@class="article-properties-body"]')
        return "description"

    def get_title(self):
        __variation = self.product_json["variations"][self.variationId]
        _title = __variation['name']
        return _title

    def get_variations_products(self):
        # Step 1: parse all variations as product items.
        _variations_parser = OttoVariationsParser(self.product_json)
        __all_products = _variations_parser.get_all_variations_products()

        children = []

        __variations = self.product_json["variations"]
        for variation in __variations:
            pass

        return children
