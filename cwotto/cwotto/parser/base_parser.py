import logging
import urlparse


class BaseParser(object):
    def __init__(self):
        pass

    def parse(self, url, hxs, index):
        return None

    def parse_relative(self, url, hxs):
        pass

    def parse_paginate(self, url, hxs, cache_db):
        pass

    def get_value_from_response(self, hxs, query, index, default=""):
        _list = hxs.xpath(query)
        if len(_list) > index:
            value = _list[index].extract()
            return value
        return default

    def get_value_with_urljoin(self, hxs, query, base, index=0):
        href = self.extract_by_query(hxs, query, index)
        if href:
            return self.get_url_join(href, base)
        return ""

    def get_url_join(self, href, base):
        if href:
            href = href.strip()
        return urlparse.urljoin(base, href)

    def extract_by_query(self, hxs, query, index=0, default=""):
        list = []

        try:
            list = hxs.xpath(query)
        except Exception, e:
            logging.debug("  get value via xpath failure, {}".format(e))

        if len(list) > index:
            value = list[index].extract()
            return value
        return default

    def extract_all_by_query(self, hxs, query):
        list = hxs.xpath(query).extract()

        lines = []
        for idx, line in enumerate(list):
            lines.append(line.replace('\n', '').replace('\r', ''))

        return ''.join(lines)
