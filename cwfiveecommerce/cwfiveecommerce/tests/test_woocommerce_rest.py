# -*- coding: utf-8 -*-

import unittest

from wordpress_xmlrpc import Client
from wordpress_xmlrpc.methods.posts import GetPosts

from cwfiveecommerce import settings
from woocommerce import API


class WoocommerceRestTest(unittest.TestCase):
    def setUp(self):
        self.wcapi = API(
            url=settings.WD_HOST,
            consumer_key=settings.woo_consumer_key,
            consumer_secret=settings.woo_consumer_secret
        )
        self.image_link = 'http://localhost:8888/fiveecommerce/wp-content/uploads/2016/07/picture-324x160.jpeg'

    def test_post_product(self):
        data = {
            "name": "Premium Quality",
            "type": "simple",
            "regular_price": "21.99",
            "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        }

        callback = self.wcapi.post("products", data)
        result = callback.json()

        x = 0
