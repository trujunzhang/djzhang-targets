import pymongo

from cwharaj.database.base.mongo_db import MongoDatabase
from cwharaj.database.base.mysql_db import MysqlDatabase


class DispatchDatabase(object):
    def __init__(self, host, port, user, passwd, db, collection_name):
        # self.database = MysqlDatabase(host=host, port=port,
        #                               user=user, passwd=passwd,
        #                               db=db, collection_name=collection_name)

        self.database = MongoDatabase(host=host, port=port,
                                      user=user, passwd=passwd,
                                      db=db, collection_name=collection_name)

    def open_spider(self):
        self.database.open_spider()

    def close_spider(self):
        self.database.close_spider()

    def process_item(self, url, item=None, index=0, id=-1):
        self.database.process_item(url, item, index=index, id=id)

    def check_exist_by_id(self, _id):
        return self.database.check_exist_by_id(_id)
