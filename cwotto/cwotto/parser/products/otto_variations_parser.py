from cwotto.items import Product
from cwotto.parser.products.otto_base import OttoBase


class OttoVariationsParser(OttoBase):
    def __init__(self, product_json, product_id):
        self.product_json = product_json
        self.product_id = product_id
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
        dimension = variation['dimensions']['dimension']
        for attribute in dimension:
            if 'color' in attribute:
                self._get_color_attribute(attribute)
            elif 'size' in attribute:
                self._get_size_attribute(attribute)

    def _get_color_attribute(self, attribute):
        dict = attribute['color']
        pass

    def _get_size_attribute(self, attribute):
        dict = attribute['size']
        pass
