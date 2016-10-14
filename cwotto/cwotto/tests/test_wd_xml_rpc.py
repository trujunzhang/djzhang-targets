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

        x = 0
        # self.image_link = 'http://theviewspaper.net/wp-content/uploads/WordsOfTerror-1024x576.jpg'
        # self.image_link = 'http://localhost:8888/politicl/wp-content/uploads/2016/07/picture-324x160.jpeg'

    def import_product_to_wd(self, product):
        pass

    def test_multiple_posts(self):
        from wordpress_xmlrpc.methods import posts
        posts = self.client.call(posts.GetPosts())

        current_paths = os.path.dirname(__file__).replace('/tests', '')
        path = '{}/{}'.format(current_paths, 'utils/items_otto.json')
        with open(path) as data_file:
            data = json.load(data_file)

        product = data[0]
        self.import_product_to_wd(product)
