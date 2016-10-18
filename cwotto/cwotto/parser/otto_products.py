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

        self.child_products_parser = OttoVariationsParser(self.product_json, self.product_id)
        super(OttoProducts, self).__init__(product_json, default_variationId)

    def get_variations_products(self):
        # Step 1: parse all variations as product items.
        children = self.child_products_parser.get_all_variations_products()

        return children

    def get_available_attributes(self):
        attributes = self.child_products_parser.available_attributes
        for __key in attributes.keys():
            # __value is array
            __value = attributes[__key]
            # join __value by '|' to string
            __new_value = __value.join('|')
            attributes[__key] = __new_value

        return attributes
