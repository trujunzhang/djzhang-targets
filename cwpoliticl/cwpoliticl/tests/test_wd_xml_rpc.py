# -*- coding: utf-8 -*-

import inspect, os
import unittest
from datetime import datetime

from wordpress_xmlrpc.methods import media

from cwpoliticl import settings
from wordpress_xmlrpc import Client, WordPressPost, xmlrpc_client
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo
from BeautifulSoup import BeautifulSoup
from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods import posts, media, taxonomies
from wordpress_xmlrpc.compat import xmlrpc_client
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo
from wordpress_xmlrpc.methods import taxonomies


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

    # def test_post_page(self):
    #     post = WordPressPost()
    #     post.title = 'Python_Scraping_for_WordPress'
    #     post.content = 'How to post to wordpress using xml_rpc.'
    #     post.post_type = "post"
    #     post.post_status = "publish"
    #     post.terms_names = {
    #         'post_tag': ['scrapy', 'xml_rpc'],
    #         'category': ['Tutorial', 'Tests']
    #     }
    #     wp_call = self.wp.call(NewPost(post))
    #
    #     x = 0

    def get_image_path(self):
        folder = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))  # script directory
        image_path = "{}/{}".format(folder, "recipe.jpg")

        return image_path

    def test_post_page_with_image(self):
        # Step 01
        # prepare metadata
        data = {
            'name': 'picture.jpeg',
            'type': 'image/jpeg',  # mimetype
        }

        path = self.get_image_path()
        with open(path, 'rb') as img:
            data['bits'] = xmlrpc_client.Binary(img.read())
        response = self.wp.call(media.UploadFile(data))
        attachment_id = response['id']

        # Step 02
        post = WordPressPost()
        post.title = 'Post by the xml_rpc with a thumbnail'
        post.content = 'How to post to wordpress using xml_rpc with a thumbnail.'
        post.post_type = "post"
        post.post_status = "publish"
        post.terms_names = {
            'post_tag': ['scrapy', 'xml_rpc'],
            'category': ['Tutorial', 'Tests']
        }
        post.custom_fields = []
        post.custom_fields.append({
            'key': 'custom_source_url',
            'value': 'http://www.scruby.site'
        })
        # cat1 = self.wp.call(taxonomies.GetTerm('category', 'wanghao'))
        # post.terms.append(cat1)
        post.thumbnail = attachment_id

        addpost = self.wp.call(posts.NewPost(post))

        x = 0
