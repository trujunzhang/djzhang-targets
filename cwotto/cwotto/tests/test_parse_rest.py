# -*- coding: utf-8 -*-

import unittest

from cwotto.extensions import ParsePy
from cwotto.utils.crawl_utils import CrawlUtils


class ParseRestTest(unittest.TestCase):
    def setUp(self):
        Parse_Application_name = "otto-products"
        ParsePy.APPLICATION_ID = "bAWPW8Ap8Sbk6prAu8hflEoDZ5uCvjTvY5nLpB7X"
        ParsePy.MASTER_KEY = "BxBCs6KP0rk6Q2sR4XW5CnsEWK4mj4vdIHsEw7nB"

    def xxtest_save_to_parse(self):
        product = ParsePy.ParseObject("Product")
        product.playerName = "Sean Plott"
        product.cheatMode = False

        product.save()

        id = product.objectId()

        self.assertNotEqual(id, None)

    def xxxtest_query(self):
        gameScore = ParsePy.ParseQuery("Product").get("LWzpWzHOfr")

        x = 0

    def test_get_product_id(self):
        product_id = CrawlUtils.get_product_id("/p/ajc-kurzblazer-552791036/#variationId=552791094")
        self.assertEqual(product_id, '552791036')

        product_id = CrawlUtils.get_product_id("https://www.otto.de/p/sit-sideboard-corsica-breite-150-cm-562203065#variationId=562204027")
        self.assertEqual(product_id, '562203065')

        variation_id = CrawlUtils.get_variation_id("https://www.otto.de/p/bruno-banani-blazer-im-uniform-look-512770595#variationId=512770597")
        self.assertEqual(variation_id, '512770597')


