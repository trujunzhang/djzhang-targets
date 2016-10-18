import json

from cwotto.items import Product
from cwotto.parser.products.otto_base import OttoBase


class OttoVariationsParser(OttoBase):
    def __init__(self, product_json, product_id):
        self.product_json = product_json
        self.product_id = product_id

        self.available_attributes = []
        super(OttoVariationsParser, self).__init__(product_json)

    def get_all_variations_products(self):
        items = []
        __variations = self.product_json['variations']
        for variation_id in __variations:
            variation = __variations[variation_id]
            __item = self.__parse_product(variation=variation)
            items.append(__item)

        return items

    def __parse_product(self, variation):
        url = self.get_child_link(variation)
        variable_id = variation['id']
        title = variation['name']

        regular_price = variation['displayPrice']['comparativePriceAmount'].replace(',', '.')
        price = variation['displayPrice']['priceAmount'].replace(',', '.')

        featured_image = variation['images']['uriTemplate']
        product_gallery = []  # self.get_product_gallery(variation)

        attributes = self._get_product_attributes(variation=variation)

        return Product.get_variable_product(url, self.product_id, variable_id,
                                            title, regular_price, price,
                                            featured_image, product_gallery,
                                            attributes)

    def _get_product_attributes(self, variation):
        attributes = {}
        dimension = variation['dimensions']['dimension']
        for attribute in dimension:
            if 'color' in attribute:
                attributes['color'] = attribute['color']['value']
                if not 'color' in self.available_attributes:
                    self.available_attributes.append("color")
            elif 'size' in attribute:
                attributes['size'] = attribute['size']['value']
                if not 'size' in self.available_attributes:
                    self.available_attributes.append("size")

        return json.dumps(attributes)
