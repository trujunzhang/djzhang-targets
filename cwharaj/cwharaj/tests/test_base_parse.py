# -*- coding: utf-8 -*-

import unittest


class BaseParseTest(unittest.TestCase):
    def setUp(self):
        self.comment_header_string = '<div class=" comment_header">  <a href="https://haraj.com.sa/users/iabdulmjeed" class="username">iabdulmjeed</a>   قبل شهر و 2 أسبوع في<a href="https://haraj.com.sa/city/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6" class="city-head">الرياض</a><br>رقم الاعلان : 12880409<br> آخر تحديث قبل ساعه و 4 دقيقه<div class="pull-left"></div></div>'

    # def test_published_date(self):
    #     _haraj_parser = HarajSaParse()
    #
    #     published_date = _haraj_parser.get_published_date(self.comment_header_string)
    #
    #     expect = '   قبل شهر و 2 أسبوع في'
    #     self.assertEqual(published_date, expect, "The same published date")

    def test_special_char(self):
        _text = "سبب البيع اني حملت ومقدر اخليها عندي بتضر الجنين 😿💔"

        _encoding = _text.encode('utf-8')

