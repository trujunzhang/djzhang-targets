# -*- coding: utf-8 -*-
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

    def test_multiple_posts(self):
        from wordpress_xmlrpc.methods import posts
        posts = self.client.call(posts.GetPosts())
        x = 0
