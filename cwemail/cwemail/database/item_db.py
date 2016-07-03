from cwemail.database.base_db import BaseDatabase

import logging
from scrapy.exceptions import DropItem
from datetime import datetime

from cwemail.utils.crawl_utils import CrawlUtils


class ItemDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(ItemDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None):
        global data

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
            logging.debug("Email added to MongoDB database!")

    @staticmethod
    def check_data_valid(item):
        title = item['title']
        if not title:
            return False

        return True
