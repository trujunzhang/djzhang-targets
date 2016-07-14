# -*- coding: utf-8 -*-

import unittest

from cwpoliticl.extensions.base_parser import BaseParser


class BaseParseTest(unittest.TestCase):
    def setUp(self):
        self.base_parse = BaseParser()

    def test_post_page(self):
        self.base_parse.get_all_value_response()
        pass
