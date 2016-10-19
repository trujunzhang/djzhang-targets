import json

from cwotto.items import Product
from cwotto.parser.products.otto_base import OttoBase


class OttoVariationsParser(OttoBase):
    def __init__(self):
        self.available_attributes = {}
        super(OttoVariationsParser, self).__init__()

    def get_all_variations_products(self, product_json, product_id, default_variation_id):
        items = []
        __variations = product_json['variations']

        count = 1
        for variation_id in __variations:
            variation = __variations[variation_id]
            __item = self.parse_product(variation=variation, count=count,
                                        product_id=product_id,
                                        default_variation_id=default_variation_id)
            items.append(__item)

            count += 1

        return items

    def parse_product(self, variation, count, product_id, default_variation_id):
        url = self.get_child_link(variation)
        variable_id = variation['id']
        title = variation['name']

        display_price_ = variation['displayPrice']

        price = display_price_['priceAmount'].replace(',', '.')

        regular_price = price
        __comparativePriceAmount = display_price_['comparativePriceAmount']
        if __comparativePriceAmount:
            regular_price = __comparativePriceAmount.replace(',', '.')

        featured_image = variation['images']['uriTemplate']
        product_gallery = self.get_product_gallery(variation)

        attributes = self._get_product_attributes(variation=variation)

        return Product.get_variable_product(url, default_variation_id, count,
                                            product_id, variable_id,
                                            title, regular_price, price,
                                            featured_image, product_gallery,
                                            attributes)

    def _get_product_attributes(self, variation):
        attributes = {}
        dimension = variation['dimensions']['dimension']
        for attribute in dimension:
            if 'color' in attribute:
                value = attribute['color']['value']
                attributes['color'] = value
                self._append_attribute_to_type("color", value)
            elif 'size' in attribute:
                value = attribute['size']['value']
                attributes['size'] = value
                self._append_attribute_to_type("size", value)

        return json.dumps(attributes)

    def _append_attribute_to_type(self, key, value):
        __av_value = []
        if key in self.available_attributes.keys():
            __av_value = self.available_attributes[key]

        __av_value.append(value)
        self.available_attributes[key] = __av_value
