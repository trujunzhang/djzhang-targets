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
