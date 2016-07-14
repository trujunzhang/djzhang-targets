# -*- coding: utf-8 -*-

import unittest

from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import WDPost


class BaseParseTest(unittest.TestCase):
    def setUp(self):
        self.base_parse = BaseParser()

    # def test_post_page(self):
    #     self.base_parse.get_all_value_response()
    #     pass

    def test_new_wdpost(self):
        self.url_from = 'url_from'
        url = 'http://www.google.com'
        title = 'title'
        image_src = ''
        thumbnail_url = 'http://thumbnail/1.jpg'
        content = 'content'
        tags = []

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags)

        self.assertEqual(item['url'], url)
