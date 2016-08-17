# -*- coding: utf-8 -*-
import os

from scrapy import Selector


class ParserUtils(object):
    debug_path = '/Users/djzhang/Desktop/upwork-projects/jetbrains/jetbrains-crawler-scraper/debug'

    @classmethod
    def get_offline_selector(self, url_from, is_pagination=True):
        t = 'detail'
        if is_pagination:
            t = 'pagination'
        filename = '{}/{}_{}.html'.format(self.debug_path, url_from, t)
        if os.path.isfile(filename):
            f = open(filename, 'r')
            c = f.read()
            f.close()

            sel = Selector(text=c)
            return sel

    @classmethod
    def get_source_for_paragraph(self, url_from, index):
        filename = '{}/paragraphs/{}-{}.html'.format(self.debug_path, url_from, index)
        if os.path.isfile(filename):
            f = open(filename, 'r')
            c = f.read()
            f.close()

            return c

    @classmethod
    def get_selector_for_paragraph(self, url_from, index):
        c = ParserUtils.get_source_for_paragraph(url_from, index)

        sel = Selector(text=c)
        return sel
