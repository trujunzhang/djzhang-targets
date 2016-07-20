from cwfiveecommerce.spiders.dispatch.base_dispatch import BaseDispatch


class SpiderWatchDispatch(BaseDispatch):
    def __init__(self):
        super(SpiderWatchDispatch, self).__init__()

    def parse_from_pagination(self, url, hxs, cache_db, history_db):
        type = self.websites[url]
        parse = self.parses[type]

        parse.parse_paginate(url, hxs, cache_db, history_db)
