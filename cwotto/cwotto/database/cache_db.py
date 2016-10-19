from cwotto.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cwotto.utils.crawl_utils import CrawlUtils

from cwotto.extensions import ParsePy


class CacheDatabase(BaseDatabase):
    def __init__(self):
        super(CacheDatabase, self).__init__()

    def save_cache(self, item):
        cache = ParsePy.ParseObject("Caches")
        cache.score = item['url']
        cache.save()

    def get_oldest_row_url(self, last_url):
        # Step01:remove it.
        self.remove_last_cache(last_url)

        # Step02: query the last cache.
        query = ParsePy.ParseQuery("Caches")
        query = query.order("createdAt").limit(1)
        caches = query.fetch()

        if len(caches) == 1:
            return caches[0].url

        return None

    def remove_last_cache(self, last_url):
        query = ParsePy.ParseQuery("Caches")
        query = query.eq("url", last_url)
        caches = query.fetch()

        if len(caches) == 1:
            caches[0].delete()
