# -*- coding: utf-8 -*-

import warnings
import unittest

from cwharaj.parser.base_parser import BaseParser


class BaseParseTest(unittest.TestCase):
    def setUp(self):
        self.comment_header_string = '<div class=" comment_header">  <a href="https://haraj.com.sa/users/iabdulmjeed" class="username">iabdulmjeed</a>   قبل شهر و 2 أسبوع في<a href="https://haraj.com.sa/city/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6" class="city-head">الرياض</a><br>رقم الاعلان : 12880409<br> آخر تحديث قبل ساعه و 4 دقيقه<div class="pull-left"></div></div>'

    def test_regex_get_model_id(self):
        _base_parser = BaseParser()
        published_date = _base_parser.get_published_date(self.comment_header_string)
        self.assertEqual(published_date, 'قبل شهر و 2 أسبوع في', "The same published date")
