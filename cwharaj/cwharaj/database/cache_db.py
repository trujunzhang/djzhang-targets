import pymongo

from cwharaj.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cwharaj.utils.crawl_utils import CrawlUtils


class CacheDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(CacheDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None, index=0, id=-1):
        logging.debug("  process cache item at position: {}".format(index - 1))

        guid = CrawlUtils.get_guid(url)

        item["url"] = url
        item["guid"] = guid
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        if item["ID"] == "":
            _href = item["url"]

        if self.check_exist_by_id(item["ID"]):
            logging.debug("  item exist {} from {} on the cache database".format(item["ID"], item["url_from"]))
        else:
            self.db[self.collection_name].insert(dict(item))
            logging.debug("  cache from {}, added {} to database".format(item["url_from"], item["ID"]))

    def get_oldest_row(self, _last, url_from):
        logging.debug("Get oldest row:")
        logging.debug("  1. the last url: {}".format(_last))

        if _last:
            # Parse the url and get the unique id.
            from cwharaj.items import WebsiteTypes
            _position = WebsiteTypes.get_id_index(url_from)
            _id = CrawlUtils.url_parse_id_from_page_url(_last, _position)
            logging.debug("  2. get the last url's id: {}".format(_id))

            # Generate a query dictionary.
            deleted_dict = {'id': _id}

            # Query the deleted item count, must be equal to 1.
            count = self.db[self.collection_name].count(deleted_dict)
            logging.debug("  3. found the deleted item count: {}".format(count))
            if count:
                result = self.db[self.collection_name].delete_one(deleted_dict)
                logging.debug(
                    "  4. deleted cache row, id: {}, deleted count: {}, from {}".format(_id, result.deleted_count,
                                                                                        url_from))

        # Query the oldest cache item.
        cursor = self.db[self.collection_name].find().sort([("created_at", pymongo.ASCENDING)])
        logging.debug("  5. current cache items count: {}".format(cursor.count()))

        row = None
        if cursor.count():
            row = cursor.next()
            logging.debug("  6. found the oldest row sucessfully, url: {}".format(row['url']))

        cursor.close()

        return row

    def get_row_url(self, row):
        logging.debug("Get url from the oldest row:")
        if row:
            logging.debug("  1. the url: {}".format(row['url']))
            return row['url']

        logging.debug("  2. the row is none?")
        return None

    def get_row_id(self, row):
        logging.debug("Get the id from the oldest row:")
        if row:
            logging.debug("  1. the id: {}".format(row['ID']))
            return row['ID']

        logging.debug("  2. the row is none?")
        return None
