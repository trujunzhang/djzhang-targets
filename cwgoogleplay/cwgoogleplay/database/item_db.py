from cwgoogleplay.database.base_db import BaseDatabase

import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime

from cwgoogleplay.utils.crawl_utils import CrawlUtils


class ItemDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(ItemDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None):
        global data

        item["url"] = url
        item["guid"] = CrawlUtils.get_guid(url)
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')
        item["updated_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        valid = True
        for data in item:
            if not data:
                valid = False
                raise DropItem("Missing {0}!".format(data))

        if not self.check_data_valid(item):
            valid = False
            raise DropItem("invalid {0}!".format(data))

        if valid:
            if self.check_exist(url):
                valid = False
                raise DropItem("Duplicate item found: {0}!".format(data))

        if valid:
            self.db[self.collection_name].insert(dict(item))
            log.msg("GooglePlay added to MongoDB database!", level=log.DEBUG)

    @staticmethod
    def check_data_valid(item):
        title = item['title']
        if not title:
            return False

        return True
