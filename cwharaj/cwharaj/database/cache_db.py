import pymongo

from cwharaj.database.base_db import BaseDatabase

import logging
from datetime import datetime, time

from cwharaj.utils.crawl_utils import CrawlUtils


class CacheDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(CacheDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None):
        guid = CrawlUtils.get_guid(url)

        item["url"] = url
        item["guid"] = guid
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')
        item["milliseconds"] = datetime.now().strftime("%s")

        if not self.check_exist(url):
            self.db[self.collection_name].insert(dict(item))
            logging.debug("HarajCache added to MongoDB database!")

    def get_last_row(self, _last=""):
        if _last:
            self.db[self.collection_name].delete_one({'url': _last})

        cursor = self.db[self.collection_name].find().sort([("created_at", pymongo.ASCENDING)])

        row = None
        if cursor.count():
            row = cursor.next()

        cursor.close()

        return row

    def get_row_url(self, row):
        if row:
            return row['url']

        return None

    def get_row_model_id(self, row):
        if row:
            return row['model_id']

        return None
