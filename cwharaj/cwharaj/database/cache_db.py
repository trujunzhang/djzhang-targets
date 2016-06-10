import pymongo

from cwharaj.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cwharaj.utils.crawl_utils import CrawlUtils


class CacheDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(CacheDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None, index=0):
        logging.debug("  process cache item at position: {}".format(index - 1))

        guid = CrawlUtils.get_guid(url)

        item["url"] = url
        item["guid"] = guid
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        if self.check_exist_by_model_id(item["model_id"]):
            logging.debug("  item exist {} on the cache database".format(item["model_id"]))
        else:
            self.db[self.collection_name].insert(dict(item))
            logging.debug("  cache for {}, added to database".format(item["url_from"]))

    def get_oldest_row(self, _last=""):
        logging.debug("Get oldest row:")
        logging.debug("  1. the last url: {}".format(_last))

        if _last:
            model_id = CrawlUtils.get_model_id_from_page_url(_last, -1)
            logging.debug("  2. get the last url's model_id: {}".format(model_id))

            deleted_dict = {'model_id': model_id}

            count = self.db[self.collection_name].count(deleted_dict)
            logging.debug("  3. found the deleted item count: {}".format(count))
            if count:
                result = self.db[self.collection_name].delete_one(deleted_dict)
                logging.debug(
                    "  4. deleted cache row, model_id: {}, deleted count: {}".format(model_id, result.deleted_count))

        cursor = self.db[self.collection_name].find().sort([("created_at", pymongo.ASCENDING)])
        logging.debug("  5. current cache items count: {}".format(cursor.count()))

        row = None
        if cursor.count():
            row = cursor.next()
            logging.debug("  6. found the oldest row sucessfully: {}".format(row['url']))

        cursor.close()

        return row

    def get_row_url(self, row):
        logging.debug("Get url from the oldest row:")
        if row:
            logging.debug("  1. the url: {}".format(row['url']))
            return row['url']

        logging.debug("  2. the row is none?")
        return None

    def get_row_model_id(self, row):
        logging.debug("Get model_id from the oldest row:")
        if row:
            logging.debug("  1. the model_id: {}".format(row['model_id']))
            return row['model_id']

        logging.debug("  2. the row is none?")
        return None
