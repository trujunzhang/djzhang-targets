# -*- coding: utf-8 -*-

import unittest

from cwfiveecommerce.scraped_websites import WebsiteTypes, get_crawler_name
from cwfiveecommerce.utils.page_content_util import PageContentUtil
from cwfiveecommerce.utils.parser_util import ParserUtils


class ParagraphsParserTest(unittest.TestCase):
    url_from = get_crawler_name()['url_from']

    def setUp(self):
        self.page_content_util = PageContentUtil()

    def test_get_type_from_detailed_page(self):
        c = ParserUtils.get_source_for_paragraph(self.url_from, 2)
        lines = self.page_content_util.get_paragraphs_lines(c)
        l = len(lines)

