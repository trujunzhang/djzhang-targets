# -*- coding: utf-8 -*-
import json
import os
import unittest

from cwotto import settings


class WDXmlRpcTest(unittest.TestCase):
    def setUp(self):
        from wordpress_xmlrpc import Client
        host = "http://{}/{}".format(settings.WD_HOST, settings.WD_COLLECTION)
        self.client = Client(host, settings.WD_USER, settings.WD_PASSWD)

    def test_posts_list(self):
        from wordpress_xmlrpc.methods import posts
        posts = self.client.call(posts.GetPosts())

    def import_product_to_wd(self, product):
        from wordpress_xmlrpc.methods import posts
        from wordpress_xmlrpc import WordPressPost

        # now let's create a new product
        widget = WordPressPost()
        widget.post_type = 'acme_product'
        widget.title = 'Widget'
        widget.content = 'This is the widget'
        widget.custom_fields = []
        widget.custom_fields.append({
            'key': 'price',
            'value': 2
        })
        widget.id = self.client.call(posts.NewPost(widget))

    def test_multiple_posts(self):
        current_paths = os.path.dirname(__file__).replace('/tests', '')
        path = '{}/{}'.format(current_paths, 'utils/items_otto.json')
        with open(path) as data_file:
            data = json.load(data_file)

        product = data[0]
        self.import_product_to_wd(product)
