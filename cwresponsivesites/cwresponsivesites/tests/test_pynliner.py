# -*- coding: utf-8 -*-
import os
import unittest

# Todo: Have uninstalled Pynliner.
import tinycss2
from cssutils import CSSParser

from cwresponsivesites.spiders.utils.style_checker import StyleChecker
from cwresponsivesites.spiders.utils.style_parser import StyleParser


class pynlinerTest(unittest.TestCase):
    def xxxtest_convert_to_inline_css(self):
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

    def xxxtest_css_util(self):
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

    def xxtest_cssutil(self):
        css = '@media(max-width: 1199px) {    .secondaryContent_3sS7J {        display: none;    }}'

        parser = CSSParser()
        # optionally
        # parser.setFetcher(fetcher)
        sheet = parser.parseString(cssText=css)
        print sheet.cssText

        for rule in sheet:
            if rule.type == rule.MEDIA_RULE:
                # find property
                for property in rule.media:
                    if property.name == 'color':
                        m = 0

        x = 0

    def xxxtest_tinycss2(self):
        check = StyleChecker()
        check.get_style_from_url('https://www.producthunt.com/')

    def test_style_json(self):
        parser = StyleParser(
            '/Users/djzhang/Desktop/upwork-projects/selenium/dr-css-inliner/producthunt.css',
            'https://www.producthunt.com/'
        )
        object = parser.get_style_object_from_url()

        x = 0
