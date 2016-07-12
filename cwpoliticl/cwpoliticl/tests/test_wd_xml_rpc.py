# -*- coding: utf-8 -*-

import unittest
from datetime import datetime

from cwpoliticl import settings
from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo


class WDXmlRpcTest(unittest.TestCase):
    def setUp(self):
        self.opensooq_phone_id = 24

    def test_post_page(self):
        url = "{}/xmlrpc.php".format(settings.WD_HOST)
        wp = Client(url, settings.WD_USER, settings.WD_PASSWD)
        wp.call(GetPosts())
        # [ < WordPressPost: hello - world(id=1) >]

        wp.call(GetUserInfo())
        # < WordPressUser: max >

        post = WordPressPost()
        post.title = 'My new title'
        post.content = 'This is the body of my new post.'
        post.terms_names = {
            'post_tag': ['test', 'firstpost'],
            'category': ['Introductions', 'Tests']
        }
        wp.call(NewPost(post))
