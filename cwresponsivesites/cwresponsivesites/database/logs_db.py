import logging
import pymongo


class LogDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def save_log(self, item):
        try:
            self.db[self.collection_name].insert(dict(item))
        except Exception as e:
            logging.debug("Insert log item failure!")

    def check_response_status_404(self, url):
        check_exist_count = self.db[self.collection_name].count({"url": url, "detail": "404"})

        if check_exist_count >= 2:
            return False
        return True
