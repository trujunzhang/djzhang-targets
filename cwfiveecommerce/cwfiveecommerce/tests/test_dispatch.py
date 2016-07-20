# -*- coding: utf-8 -*-

import unittest

from cwfiveecommerce.scraped_websites import WebsiteTypes


class DispatchTest(unittest.TestCase):
    def setUp(self):
        from cwfiveecommerce.spiders.dispatch.spider_dispatch import SpiderDispatch
        self.spider_dispatch = SpiderDispatch()
        self.page_url = 'http://indianexpress.com/article/opinion/columns/burhan-wani-death-kashmir-protests-mehbooba-mufti-hurriyat-2909858/'

    def test_get_type_from_detailed_page(self):
        import urlparse
        hostname = urlparse.urlparse(self.page_url).hostname

        page_type = self.spider_dispatch._get_detail_page_type(self.page_url)
        self.assertEqual(page_type, WebsiteTypes.indianexpress)
