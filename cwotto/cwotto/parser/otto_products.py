import json

from cwotto.items import Product
from cwotto.parser.products.otto_base import OttoBase
from cwotto.parser.products.otto_variations_parser import OttoVariationsParser


class OttoProducts(OttoBase):
    def __init__(self):
        super(OttoProducts, self).__init__()

    def check_single_product_without_variables(self, product_json):
        distinct_dimensions_ = product_json["distinctDimensions"]

        if distinct_dimensions_:
            if len(distinct_dimensions_) > 0:
                return False

        return True

    def get_single_product(self, hxs, url, product_json, product_id, default_variation_id):
        __child_products_parser = OttoVariationsParser()
        __variation = product_json['variations'][default_variation_id]
        __item = __child_products_parser.parse_product(variation=__variation, count=1,
                                                       product_id=product_id,
                                                       default_variation_id=default_variation_id)

        Product.convert_to_parent(__item)

    def get_product_with_variables(self, hxs, url, product_json, product_id, default_variation_id):
        """
        Get product with variables.
        :param hxs:
        :param url:
        :param product_json:
        :param product_id:
        :param default_variation_id:
        :return:
        """
        # child products
        __child_products_parser = OttoVariationsParser()
        children = __child_products_parser.get_all_variations_products(product_json, product_id, default_variation_id)

        # Some product only have size or color.
        # So we need to get available attributes from children
        available_attributes = self.get_available_attributes_json_string(__child_products_parser)

        # Parent product
        parent = Product.get_parent_product(url=url,
                                            product_id=product_id,
                                            title=self.get_title(product_json, default_variation_id),
                                            uniqueHtmlDetails=self.get_product_description(hxs),
                                            available_attributes=available_attributes)

        return {"parent": parent, "children": children}

    def get_available_attributes_json_string(self, child_products_parser):
        attributes = child_products_parser.available_attributes
        for __key in attributes.keys():
            # __value is array
            __value = attributes[__key]
            # join __value by '|' to string
            __new_value = '|'.join(__value)
            attributes[__key] = __new_value

        return json.dumps(attributes)
