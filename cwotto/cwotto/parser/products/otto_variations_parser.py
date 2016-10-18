import json

from cwotto.items import Product
from cwotto.parser.products.otto_base import OttoBase


class OttoVariationsParser(OttoBase):
    def __init__(self, product_json, product_id):
        self.product_json = product_json
        self.product_id = product_id

        self.available_attributes = {}
        super(OttoVariationsParser, self).__init__(product_json)

    def get_all_variations_products(self):
        items = []
        __variations = self.product_json['variations']
        count = 1
        for variation_id in __variations:
            variation = __variations[variation_id]
            __item = self.__parse_product(variation=variation, count=count)
            items.append(__item)

            count += 1

        return items

    def __parse_product(self, variation, count):
        url = self.get_child_link(variation)
        variable_id = variation['id']
        title = variation['name']

        regular_price = variation['displayPrice']['comparativePriceAmount'].replace(',', '.')
        price = variation['displayPrice']['priceAmount'].replace(',', '.')

        featured_image = variation['images']['uriTemplate']
        product_gallery = []  # self.get_product_gallery(variation)

        attributes = self._get_product_attributes(variation=variation)

        return Product.get_variable_product(url, count, self.product_id, variable_id,
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
