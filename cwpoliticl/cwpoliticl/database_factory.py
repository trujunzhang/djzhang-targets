from enum import Enum


class CollectionTypes(Enum):
    cache = 1
    history = 2
    item = 3


class DatabaseFactory(object):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(DatabaseFactory, self).__init__()
        self.host = host
        self.port = port
        self.user = user
        self.passwd = passwd
        self.db = db
        self.collection_name = collection_name

    def get_database(self, collection_type):
        if CollectionTypes.cache == collection_type:
            from cwpoliticl.database.cache_db import CacheDatabase
            database = CacheDatabase(host=self.host, port=self.port,
                                     user=self.user, passwd=self.passwd,
                                     db=self.db, collection_name=self.collection_name + '_caches')
            database.open_spider()
            return database
        elif CollectionTypes.history == collection_type:
            from cwpoliticl.database.history_db import HistoryDatabase
            history_database = HistoryDatabase(host=self.host, port=self.port,
                                               user=self.user, passwd=self.passwd,
                                               db=self.db, collection_name=self.collection_name + "_histories")
            history_database.open_spider()
            return history_database
        elif CollectionTypes.item == collection_type:
            from cwpoliticl.database.item_db import ItemDatabase
            return ItemDatabase(host=self.host, port=self.port,
                                user=self.user, passwd=self.passwd,
                                db=self.db, collection_name=self.collection_name)
        else:
            return None
