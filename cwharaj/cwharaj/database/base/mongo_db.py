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


    def insert_for_cache(self, item):
        self.collection.insert(dict(item))

    def insert_for_history(self, item):
        self.collection.insert(dict(item))

    def insert_for_item(self, item):
        self.collection.insert(dict(item))

    def update_for_history(self, item):
        self.collection.update_one({'ID': id}, {'$set': dict(item)}, True)

    def get_count(self, dict):
        count = self.collection.count(dict)
        return count

    def delete_row(self, dict):
        result = self.collection.delete_one(dict)
        return result

    def find_for_cache(self):
        cursor = self.collection.find().sort([("created_at", pymongo.ASCENDING)])
        return cursor

    def check_exist_by_id(self, _id):
        cursor = self.collection.find({'ID': _id})
        if cursor.count():
            return True

        return False
