import pymongo

from cwharaj.database.base.base_db import BaseDatabase


class MysqlDatabase(BaseDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(MysqlDatabase, self).__init__(host, port, user, passwd, db, collection_name)
        # self.mongo_uri = mongo_uri
        # self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]
        self.collection = self.db[self.collection_name]

    def close_spider(self):
        self.client.close()

    def insert_for_cache(self, item):
        pass

    def insert_for_history(self, item):
        pass

    def insert_for_item(self, item):
        pass

    def update_for_history(self, item):
        pass

    def get_count(self, dict):
        pass

    def delete_row(self, _last, url_from):
        pass

    def find_oldest_for_cache(self):
        pass

    def check_exist_by_id(self, _id):
        cursor = self.collection.find({'ID': _id})
        if cursor.count():
            return True

        return False
