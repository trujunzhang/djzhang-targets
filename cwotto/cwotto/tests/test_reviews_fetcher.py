# -*- coding: utf-8 -*-

import unittest

from cwotto.parser.review_fetcher import ReviewFetcher


class ReviewsFetcherTest(unittest.TestCase):
    def setUp(self):
        self.reviewFetcher = ReviewFetcher("512770595")

    def test_fetching(self):
        reviews = self.reviewFetcher.fetch_reviews_as_json()
        x = 0
