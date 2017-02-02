import logging
import pymongo


class CacheDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def save_cache(self, item):
        self.db[self.collection_name].update_one({'url': item['url']}, {'$set': dict(item)}, True)

    def get_oldest_row(self, _last, url_from):
        logging.debug("Get the oldest row")

        if _last:
            # delete the last scraped url.
            result = self.db[self.collection_name].delete_one({"url": _last})
            deleted_count = result.deleted_count
            check_exist_count = self.db[self.collection_name].count({"url": _last})
            logging.debug(
                "  1. delete the last scraped url: {},[{}]-[{}]".format(_last.encode('utf-8'), deleted_count, check_exist_count))

        # Query the oldest cache item.
        return self.__find_oldest_for_cache()

    def __find_oldest_for_cache(self):
        """
        Query the oldest cache item.
        """

        lastCacheOnly = self.db[self.collection_name].find().sort([("created_at", pymongo.DESCENDING)]).limit(1)

        logging.debug(
            "  Cache: find the total count {} on the {}".format(lastCacheOnly.count(), self.collection_name))

        rows = []
        for t in lastCacheOnly:
            rows.append(t)

        if len(rows) == 1:
            return rows[0]

        return None
