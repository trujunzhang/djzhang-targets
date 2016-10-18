# -*- coding: utf-8 -*-

import unittest

from cwotto.parser.products.otto_variations_parser import OttoVariationsParser
from debug.support_product_json import ProductJsonSupport


class OttoVariationsParserTest(unittest.TestCase):
    def setUp(self):
        self.child_products_parser = OttoVariationsParser(product_json=None, product_id=None)

    def test_product_attribute(self):
        variation = ProductJsonSupport().get_variation_json()

        result = self.child_products_parser._get_product_attributes(variation)
        available_attributes = self.child_products_parser.available_attributes
        x = 0
