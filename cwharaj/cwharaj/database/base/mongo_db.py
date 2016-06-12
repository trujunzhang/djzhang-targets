import pymongo

from cwharaj.database.base.base_db import BaseDatabase


class MongoDatabase(BaseDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(MongoDatabase, self).__init__(host, port, user, passwd, db, collection_name)
        self.mongo_uri = host
        self.mongo_db = db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]
        self.collection = self.db[self.collection_name]

    def close_spider(self):
        self.client.close()

    def process_item(self, url, item=None, index=0, id=-1):
        pass

    def check_exist_by_id(self, _id):
        cursor = self.collection.find({'ID': _id})
        if cursor.count():
            return True

        return False