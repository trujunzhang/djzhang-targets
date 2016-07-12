import logging

import MySQLdb

from cwpoliticl.database.base.base_db import BaseDatabase


class MongoDatabase(BaseDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(MysqlDatabase, self).__init__(host, port, user, passwd, db, collection_name)
        self.host = host
        self.port = port
        self.user = user
        self.passwd = passwd
        self.db = db
        self.collection_name = collection_name

    def get_client(self):
        try:
            _connection = MySQLdb.Connection(
                host=self.host,
                user=self.user,
                passwd=self.passwd,
                db=self.db,
                port=self.port,
                charset="utf8mb4",
                use_unicode=True
            )
            return _connection
        except (AttributeError, MySQLdb.OperationalError), e:
            raise e

    def open_spider(self):
        pass

    def close_spider(self):
        pass

    def check_exist_by_id(self, _id):

        if ret:
            return True

        return False
