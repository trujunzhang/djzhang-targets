# -*- coding: utf-8 -*-
import json
import os
import unittest

from cwotto import settings
from woocommerce import API


class WDWoocommerceRestTest(unittest.TestCase):
    def setUp(self):
        self.wcapi = API(
            url="http://{}".format(settings.WD_HOST),
            consumer_key=settings.consumer_key,
            consumer_secret=settings.consumer_secret
        )

    def test_posts_list(self):
        r = self.wcapi.get("products")
        s = r.status_code
        j = r.json()

    def import_product_to_wd(self, product):
        self.assertNotEqual(product.id, None)

    def test_multiple_posts(self):
        current_paths = os.path.dirname(__file__).replace('/tests', '')
        path = '{}/{}'.format(current_paths, 'utils/items_otto.json')
        with open(path) as data_file:
            data = json.load(data_file)

        product = data[0]
        self.import_product_to_wd(product)
