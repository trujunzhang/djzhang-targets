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
        cache.save()

    def get_oldest_row(self, _last_product_id):
        pass
