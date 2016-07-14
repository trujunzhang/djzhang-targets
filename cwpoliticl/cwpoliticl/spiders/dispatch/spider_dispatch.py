from cwpoliticl.spiders.dispatch.base_dispatch import BaseDispatch


class SpiderDispatch(BaseDispatch):
    def __init__(self):
        super(SpiderDispatch, self).__init__()

    def parse_from_detail_page(self, url, hxs, cache_db, history_db):
        type = self.websites[url]
        parse = self.parses[type]

        parse.parse_paginate(url, hxs, cache_db, history_db)
