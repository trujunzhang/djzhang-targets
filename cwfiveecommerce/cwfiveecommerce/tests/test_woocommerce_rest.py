# -*- coding: utf-8 -*-

import unittest

from wordpress_xmlrpc import Client
from wordpress_xmlrpc.methods.posts import GetPosts

from cwfiveecommerce import settings
from woocommerce import API


class WoocommerceRestTest(unittest.TestCase):
    def setUp(self):
        self.wcapi = API(
            url="{}/xmlrpc.php".format(settings.WD_HOST),
            consumer_key=settings.woo_consumer_key,
            consumer_secret=settings.woo_consumer_secret
        )
        self.image_link = 'http://localhost:8888/fiveecommerce/wp-content/uploads/2016/07/picture-324x160.jpeg'

        def test_get_posts(self):
            data = {
                "name": "Premium Quality",
                "type": "simple",
                "regular_price": "21.99",
                "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                "categories": [
                    {
                        "id": 9
                    },
                    {
                        "id": 14
                    }
                ],
                "images": [
                    {
                        "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
                        "position": 0
                    },
                    {
                        "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
                        "position": 1
                    }
                ]
            }
            callback = self.wcapi.post("products", data).json()
