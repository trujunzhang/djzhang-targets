# -*- coding: utf-8 -*-

import unittest
from datetime import datetime

from cwpoliticl import settings
from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo


class WDXmlRpcTest(unittest.TestCase):
    def setUp(self):
        url = "{}/xmlrpc.php".format(settings.WD_HOST)
        self.wp = Client(url, settings.WD_USER, settings.WD_PASSWD)

        # def test_get_posts(self):
        #     wp_call = self.wp.call(GetPosts())
        #     x = 0
        # [ < WordPressPost: hello - world(id=1) >]

        # def test_get_user_info(self):
        #     wp_call = self.wp.call(GetUserInfo())
        #     x = 0
        #     < WordPressUser: max >

    def test_post_page(self):
        post = WordPressPost()
        post.title = 'Python_Scraping_for_WordPress'
        post.content = 'How to post to wordpress using xml_rpc.'
        post.post_type = "post"
        post.post_status = "publish"
        post.terms_names = {
            'post_tag': ['scrapy', 'xml_rpc'],
            'category': ['Tutorial', 'Tests']
        }
        wp_call = self.wp.call(NewPost(post))
        x = 0
