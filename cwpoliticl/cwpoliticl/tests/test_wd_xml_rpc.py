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

    def test_get_posts(self):
        wp_call = self.wp.call(GetPosts())
        # [ < WordPressPost: hello - world(id=1) >]

    def test_get_user_info(self):
        wp_call = self.wp.call(GetUserInfo())
        # < WordPressUser: max >

        # def test_post_page(self):
        #     post = WordPressPost()
        #     post.title = 'My new title'
        #     post.content = 'This is the body of my new post.'
        #     post.terms_names = {
        #         'post_tag': ['test', 'firstpost'],
        #         'category': ['Introductions', 'Tests']
        #     }
        #     self.wp.call(NewPost(post))
