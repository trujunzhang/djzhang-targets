# -*- coding: utf-8 -*-

import unittest

from cwotto.parser.products.review_fetcher import ReviewFetcher
from debug.support_product_json import VariationTreeJson


class ProductVariationTreeTest(unittest.TestCase):
    def setUp(self):
        pass
        # variation_tree_json = VariationTreeJson().get_variation_tree_json()
        # self.otto_variation_tree = OttoVariationTree(variation_tree_json)

    def test_fetching(self):
        x = 0
