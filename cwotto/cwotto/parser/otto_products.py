import json

from cwotto.parser.products.otto_base import OttoBase
from cwotto.parser.products.otto_variations_parser import OttoVariationsParser


class OttoProducts(OttoBase):
    def __init__(self, hxs, url, product_json, product_id, default_variationId):
        self.hxs = hxs
        self.url = url
        self.product_json = product_json
        self.product_id = product_id
        self.default_variationId = default_variationId
        super(OttoProducts, self).__init__(product_json, default_variationId)

    def get_variations_products(self):
        # Step 1: parse all variations as product items.
        _variations_parser = OttoVariationsParser(self.product_json, self.product_id)
        __all_products = _variations_parser.get_all_variations_products()

        children = []

        __variations = self.product_json["variations"]
        for variation in __variations:
            pass

        return children
