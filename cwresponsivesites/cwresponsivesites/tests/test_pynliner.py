# -*- coding: utf-8 -*-
import os
import unittest


# Todo: Have uninstalled Pynliner.

class pynlinerTest(unittest.TestCase):
    def xxxtest_convert_to_inline_css(self):
        url = 'http://www.futurecrew.com/skaven/song_files/mp3/razorback.mp3'
        # filename = wget.download(url)
        import commands
        result = commands.getstatusoutput(
            'phantomjs {} {} -w 320 -h 480 -c -o {}'
                .format(
                "/Users/djzhang/Desktop/VPS/djzhang-targets/cwresponsivesites/cwresponsivesites/extensions/dr-css-inliner/index.js",
                'https://www.producthunt.com/',
                '/tmp/producthunt-iphone.css')
        )

        if len(result) == 2:
            if result[0] == 0 and result[1] == '':
                # it means that run successfully.
                pass

        x = 0

    def xxxtest_parse_css(self):
        s = ''
        filename = '/tmp/producthunt-iphone.css'
        if os.path.isfile(filename):
            f = open(filename, 'r')
            s = f.read()
            f.close()

        import tinycss
        stylesheet = tinycss.make_parser().parse_stylesheet(s)

        rules = stylesheet.rules

    def test_css_util(self):
        css = ''
        filename = '/tmp/producthunt-iphone.css'
        if os.path.isfile(filename):
            f = open(filename, 'r')
            css = f.read()
            f.close()

        css = '@media(max-width: 1199px) {    .secondaryContent_3sS7J {        display: none;    }}'

        import cssutils
        sheet = cssutils.parseString(css)

        for rule in sheet:
            if rule.type == rule.MEDIA_RULE:
                pass

            if rule.type == rule.STYLE_RULE:
                pass
                # find property
                # for property in rule.style:
                #     if property.name == 'color':
                #         property.value = 'green'
                #         property.priority = 'IMPORTANT'
                #         break
                # or simply:
                # rule.style['margin'] = '01.0eM'  # or: ('1em', 'important')

        x = 0
