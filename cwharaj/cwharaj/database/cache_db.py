import pymongo

from cwharaj.database.base_db import BaseDatabase

import logging
from datetime import datetime

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

    def get_oldest_row(self, _last=""):
        logging.debug("Get oldest row:")
        logging.debug("  1. the last url: {}".format(_last))

        if _last:
            count = self.db[self.collection_name].count({'url': _last})
            logging.debug("  2. found the deleted item count: {}".format(count))
            if count:
                result = self.db[self.collection_name].delete_one({'url': _last})
                logging.debug("  3. deleted cache row url: {}, deleted count: {}".format(_last, result.deleted_count))

        cursor = self.db[self.collection_name].find().sort([("created_at", pymongo.ASCENDING)])
        logging.debug("  4. current Cache items count: {}".format(cursor.count()))

        row = None
        if cursor.count():
            row = cursor.next()
            logging.debug("  5. found the oldest row: {}".format(row['url']))

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
