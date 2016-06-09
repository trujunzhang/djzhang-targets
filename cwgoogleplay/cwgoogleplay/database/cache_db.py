from cwgoogleplay.database.base_db import BaseDatabase

import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime

from cwgoogleplay.utils.crawl_utils import CrawlUtils


class CacheDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(CacheDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None):
        guid = CrawlUtils.get_guid(url)

        item = {
            'url': url,
            'guid': guid,
            'created_at': datetime.utcnow().replace(microsecond=0).isoformat(' '),
        }

        self.db[self.collection_name].update_one({'guid': guid}, {'$set': dict(item)}, True)
        log.msg("GooglePlayCache added to MongoDB database!", level=log.DEBUG)
