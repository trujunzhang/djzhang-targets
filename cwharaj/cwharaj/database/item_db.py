from cwharaj.database.base_db import BaseDatabase

import logging
from scrapy.exceptions import DropItem
from datetime import datetime

from cwharaj.utils.crawl_utils import CrawlUtils


class ItemDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(ItemDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None, index=0, id=-1):
        global data

        item["guid"] = CrawlUtils.get_guid(url)
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')
        item["updated_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        valid = True

        if valid:
            if self.check_exist_by_id(item["ID"]):
                valid = False
                raise DropItem("Duplicate item found: {0}!".format(data))

        if valid:
            self.collection.insert(dict(item))
            logging.debug("Haraj added to database.")
