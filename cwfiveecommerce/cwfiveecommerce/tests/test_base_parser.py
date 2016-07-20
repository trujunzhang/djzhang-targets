# -*- coding: utf-8 -*-

import unittest

from cwfiveecommerce.extensions.base_parser import BaseParser
from cwfiveecommerce.scraped_websites import WebsiteTypes
from cwfiveecommerce.utils.page_content_util import PageContentUtil
from cwfiveecommerce.utils.parser_util import ParserUtils


class BaseParseTest(unittest.TestCase):
    def setUp(self):
        self.base_parse = BaseParser()
        self.page_content_util = PageContentUtil()
        # from: 'http://www.dailyo.in/politics/mehbooba-mufti-kashmir-unrest-burhan-wani-pellets-indian-army-omar-abdullah/story/1/11797.html'
        self.page_lines = [
            'Somewhere around 2010, after the bloodier phase of unrest, I was flying into Srinagar from New Delhi or Jammu in a plane eerily full of vacant seats.',
            'I was sitting in the third row and senior PDP leaders - Mehbooba Mufti, Altaf Bukhari and the late Molvi Iftikhar Hussain Ansari were seated in the front row.',
            'I hadn’t joined politics yet but had been writing columns about what had been happening.',
            'This was also after I had been interviewed on NDTV, as a young Kashmiri, to express my anguish at what was happening. The video of that emotional outburst while talking to Barkha Dutt on NDTV had gone viral. And since I had directed my anger and criticism at the state government, it had caught Mehbooba Mufti’s attention.',
            'As for the defeats in Assam and Kerala, they are not his making. The debacle in Assam after 15 consecutive years in power ought not have come as a shocker. Winning a fourth row is an uphill task. The party had similarly lost Delhi in 2013 when chief minister Sheila Dikshit was voted out despite her unparalleled development track record.'
        ]

        self.url_from = WebsiteTypes.frontline.value

    # def test_post_page(self):
    #     self.base_parse.get_content_from_ptag()
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

    # def test_css_background_image_for_dailyo(self):
    #     image_style = "background-image:url('http://media2.intoday.in/dailyo//story/header/201607/priyankag-sheila-ab_071416102045.jpg')"
    #
    #     url = self.base_parse.get_image_src_from_style(image_style)
    #     self.assertEqual(
    #         'http://media2.intoday.in/dailyo//story/header/201607/priyankag-sheila-ab_071416102045.jpg',
    #         url)
    #
    # def test_css_background_image_for_theindianeconomist(self):
    #     image_style = 'background-image: url(http://i2.wp.com/theindianeconomist.com/wp-content/uploads/2016/07/16344930632_f89cc36a46_o.jpg?fit=1280%2C850); opacity: 0.3;'
    #     url = self.base_parse.get_image_src_from_style(image_style)
    #     self.assertEqual(
    #         'http://i2.wp.com/theindianeconomist.com/wp-content/uploads/2016/07/16344930632_f89cc36a46_o.jpg?fit=1280%2C850',
    #         url)

    # def test_limit_page_total_size(self):
    #     for line in self.page_lines:
    #         count = len(line)
    #         x = 0
    #
    #     content = self.page_content_util.get_limit_page_content(self.page_lines)

