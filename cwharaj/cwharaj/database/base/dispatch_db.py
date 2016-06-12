import pymongo

from cwharaj.database.base.mongo_db import MongoDatabase
from cwharaj.database.base.mysql_db import MysqlDatabase


class DispatchDatabase(object):
    def __init__(self, host, port, user, passwd, db, collection_name):
        # self.database = MysqlDatabase(host=host, port=port,
        #                               user=user, passwd=passwd,
        #                               db=db, collection_name=collection_name)

        self.database = MongoDatabase(
            host='localhost', port='27017',
            # host='104.236.77.182', port='27017',
            user='', passwd='',
            db=db, collection_name=collection_name)

    def process_item(self, url, item=None, index=0, id=-1):
        pass

    def open_spider(self):
        self.database.open_spider()

    def close_spider(self):
        self.database.close_spider()

    def insert_for_cache(self, item):
        self.database.insert_for_cache(item)

    def insert_for_history(self, item):
        self.database.insert_for_history(item)

    def insert_for_item(self, item):
        self.database.insert_for_item(item)

    def update_for_history(self, item):
        self.database.update_for_history(item)

    def get_count(self, dict):
        return self.database.get_count(dict)

    def delete_row(self, _last, url_from):
        self.database.delete_row(_last, url_from)

    def find_oldest_for_cache(self):
        return self.database.find_oldest_for_cache()

    def check_exist_by_id(self, _id):
        return self.database.check_exist_by_id(_id)
