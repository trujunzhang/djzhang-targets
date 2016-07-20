# -*- coding: utf-8 -*-

import unittest

from wordpress_xmlrpc import Client
from wordpress_xmlrpc.methods.posts import GetPosts

from cwfiveecommerce import settings
from cwfiveecommerce.extensions.rpc.images_downloader import ImagesDownload


class WDXmlRpcTest(unittest.TestCase):
    def setUp(self):
        url = "{}/xmlrpc.php".format(settings.WD_HOST)
        self.wp = Client(url, settings.WD_USER, settings.WD_PASSWD)

        # self.image_link = 'http://theviewspaper.net/wp-content/uploads/WordsOfTerror-1024x576.jpg'
        self.image_link = 'http://localhost:8888/fiveecommerce/wp-content/uploads/2016/07/picture-324x160.jpeg'

        def test_get_posts(self):
            wp_call = self.wp.call(GetPosts())
        #     x = 0
        # [ < WordPressPost: hello - world(id=1) >]

        # def test_get_user_info(self):
        #     wp_call = self.wp.call(GetUserInfo())
        #     x = 0
        #     < WordPressUser: max >

    def test_post_image(self):
        # '/var/folders/t1/tylq1lf13nv3rzfll_hh_5fh0000gn/T/fiveecommerce/daaf4badb91771a0d23647d713068663'
        # '/var/folders/t1/tylq1lf13nv3rzfll_hh_5fh0000gn/T/fiveecommerce'
        image_location = ImagesDownload.write_image_cache(self.image_link)
        self.assertIsNotNone(image_location)


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

        # def get_image_path(self):
        #     folder = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))  # script directory
        #     image_path = "{}/{}".format(folder, "recipe.jpg")
        #
        #     return image_path
        #
        # def test_post_page_with_image(self):
        #     # Step 01
        #     # prepare metadata
        #     data = {
        #         'name': 'picture.jpeg',
        #         'type': 'image/jpeg',  # mimetype
        #     }
        #
        #     path = self.get_image_path()
        #     with open(path, 'rb') as img:
        #         data['bits'] = xmlrpc_client.Binary(img.read())
        #     response = self.wp.call(media.UploadFile(data))
        #     attachment_id = response['id']
        #
        #     # Step 02
        #     post = WordPressPost()
        #     post.title = 'Post by the xml_rpc with a thumbnail'
        #     post.content = 'How to post to wordpress using xml_rpc with a thumbnail.'
        #     post.post_type = "post"
        #     post.post_status = "publish"
        #     post.terms_names = {
        #         'post_tag': ['scrapy', 'xml_rpc'],
        #         'category': ['Tutorial', 'Tests']
        #     }
        #     post.custom_fields = []
        #     post.custom_fields.append({
        #         'key': 'custom_source_url',
        #         'value': 'http://www.scruby.site'
        #     })
        #     # cat1 = self.wp.call(taxonomies.GetTerm('category', 'wanghao'))
        #     # post.terms.append(cat1)
        #     post.thumbnail = attachment_id
        #
        #     addpost = self.wp.call(posts.NewPost(post))
        #
        #     x = 0
