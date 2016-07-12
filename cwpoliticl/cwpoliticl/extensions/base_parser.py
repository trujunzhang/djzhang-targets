class BaseParser(object):
    def __init__(self):
        pass

    def parse(self, url, hxs, item_db):
        return None

    def parse_paginate(self, url, hxs, cache_db, history_db):
        pass

    def get_value(self, hxs, query, index, default=""):
        _list = hxs.xpath(query)
        if len(_list) > index:
            value = _list[index].extract()
            return value
        return default
