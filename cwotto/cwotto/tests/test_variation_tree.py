# -*- coding: utf-8 -*-

import unittest

from cwotto.parser.products.otto_variation_tree import OttoVariationTree
from cwotto.parser.products.review_fetcher import ReviewFetcher
from debug.variation_tree_json import VariationTreeJson


class ProductVariationTreeTest(unittest.TestCase):
    def setUp(self):
        variation_tree_json = VariationTreeJson().get_variation_tree_json()
        self.reviewFetcher = OttoVariationTree(variation_tree_json)

    def test_fetching(self):
        reviews = self.reviewFetcher.fetch_reviews_as_json()
        x = 0
