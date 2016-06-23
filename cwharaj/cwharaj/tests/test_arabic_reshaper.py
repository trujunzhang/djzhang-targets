# -*- coding: utf-8 -*-

import unittest

from bidi.algorithm import get_display

from cwharaj.utils import arabic_reshaper


class ArabicReshaperTest(unittest.TestCase):
    def setUp(self):
        self.aribic = "https://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-اليومي-والشهري-والسنوي-حي-الأمانة-شمال-الرياض"

    def test_aribic_ascii(self):
        _split = self.aribic.split('/')[6]
        reshaped_text = arabic_reshaper.reshape(_split.encode('utf-8'))
        bidi_text = get_display(reshaped_text)
        # pass_arabic_text_to_render(bidi_text)
