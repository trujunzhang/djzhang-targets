import pymongo

from cwharaj.database.base.base_db import BaseDatabase
import logging


class MysqlDatabase(BaseDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(MysqlDatabase, self).__init__(host, port, user, passwd, db, collection_name)
        self.mongo_uri = host
        self.mongo_db = db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]
        self.collection = self.db[self.collection_name]

    def close_spider(self):
        self.client.close()

    def insert_for_cache(self, item):
        self.collection.insert(dict(item))

    def insert_for_history(self, item):
        self.collection.insert(dict(item))

    def insert_for_item(self, item):
        self.collection.insert(dict(item))

    def update_for_history(self, id, item):
        self.collection.update_one({'ID': id}, {'$set': dict(item)}, True)

    def get_count(self, dict):
        count = self.collection.count(dict)
        return count

    def delete_row(self, _last, url_from):
        # 1. Parse the url and get the unique id.
        from cwharaj.items import WebsiteTypes
        _position = WebsiteTypes.get_id_index(url_from)

        from cwharaj.utils.crawl_utils import CrawlUtils
        _id = CrawlUtils.url_parse_id_from_page_url(_last, _position)
        logging.debug("  2. get the last url's id: {}".format(_id))

        # Generate a query dictionary.
        deleted_dict = {'ID': _id}

        # Query the deleted item count, must be equal to 1.
        # count = self.collection.count(deleted_dict)
        count = self.get_count(deleted_dict)
        logging.debug("  3. found the deleted item count: {} by ID".format(count, deleted_dict))
        if count:
            result = self.collection.delete_one(deleted_dict)
            logging.debug(
                "  4. deleted cache row, id: {}, deleted count: {}, from {}"
                    .format(_id, result.deleted_count, url_from))

    def find_oldest_for_cache(self):
        """Query the oldest cache item."""

        cursor = self.collection.find().sort([("created_at", pymongo.ASCENDING)])
        logging.debug("  5. current cache items count: {}".format(cursor.count()))

        row = None
        if cursor.count():
            row = cursor.next()
            logging.debug("  6. found the oldest row sucessfully, ID: {}".format(row['ID']))

        cursor.close()

        return row

    def check_exist_by_id(self, _id):
        cursor = self.collection.find({'ID': _id})
        if cursor.count():
            return True

        return False
