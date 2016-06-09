from cwgoogleplay.database.base_db import BaseDatabase

import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime

from cwgoogleplay.utils.crawl_utils import CrawlUtils


class HistoryDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(HistoryDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None):
        item = {
            'url': url,
            'guid': CrawlUtils.get_guid(url),
            'created_at': datetime.utcnow().replace(microsecond=0).isoformat(' '),
        }

        self.db[self.collection_name].insert(item)
        log.msg("GooglePlayHistory added to MongoDB database!", level=log.DEBUG)
