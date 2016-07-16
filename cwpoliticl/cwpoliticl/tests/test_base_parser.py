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

    # def test_new_wdpost(self):
    #     self.url_from = 'url_from'
    #     url = 'http://www.google.com'
    #     title = 'title'
    #     image_src = ''
    #     thumbnail_url = 'http://thumbnail/1.jpg'
    #     content = 'content'
    #     tags = []
    #
    #     item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags)
    #
    #     self.assertEqual(item['url'], url)

    def test_css_background_image_for_dailyo(self):
        image_style = "background-image:url('http://media2.intoday.in/dailyo//story/header/201607/priyankag-sheila-ab_071416102045.jpg')"

        url = self.base_parse.get_image_src_from_style(image_style)
        self.assertEqual(
            'http://media2.intoday.in/dailyo//story/header/201607/priyankag-sheila-ab_071416102045.jpg',
            url)

    def test_css_background_image_for_theindianeconomist(self):
        image_style = 'background-image: url(http://i2.wp.com/theindianeconomist.com/wp-content/uploads/2016/07/16344930632_f89cc36a46_o.jpg?fit=1280%2C850); opacity: 0.3;'
        url = self.base_parse.get_image_src_from_style(image_style)
        self.assertEqual(
            'http://i2.wp.com/theindianeconomist.com/wp-content/uploads/2016/07/16344930632_f89cc36a46_o.jpg?fit=1280%2C850',
            url)
