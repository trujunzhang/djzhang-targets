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
        cache.url = item['url']
        cache.save()

    def check_cache_exist(self, href):
        """
        :param href:
        :return:
        """
        query = ParsePy.ParseQuery("Cache")
        query = query.eq("url", href)
        list = query.fetch()

        return len(list) > 0

    def get_oldest_row_url(self, last_url):
        # Step01:remove it.
        if last_url:
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

        if len(caches) > 0:
            caches[0].delete()
