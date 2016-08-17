from enum import Enum


class CollectionTypes(Enum):
    cache = 1
    history = 2
    item = 3
    page = 4


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
            from cwjetbrains.database.cache_db import CacheDatabase
            database = CacheDatabase(host=self.host, port=self.port,
                                     user=self.user, passwd=self.passwd,
                                     db=self.db, collection_name=self.collection_name + '_cache')
            database.open_spider()
            return database
        elif CollectionTypes.history == collection_type:
            from cwjetbrains.database.history_db import HistoryDatabase
            history_database = HistoryDatabase(host=self.host, port=self.port,
                                               user=self.user, passwd=self.passwd,
                                               db=self.db, collection_name=self.collection_name + "_history")
            history_database.open_spider()
            return history_database
        elif CollectionTypes.page == collection_type:
            from cwjetbrains.database.page_db import PageDatabase
            page_database = PageDatabase(host=self.host, port=self.port,
                                         user=self.user, passwd=self.passwd,
                                         db=self.db, collection_name=self.collection_name + "_page")
            page_database.open_spider()
            return page_database
        elif CollectionTypes.item == collection_type:
            from cwjetbrains.database.item_db import ItemDatabase
            return ItemDatabase(host=self.host, port=self.port,
                                user=self.user, passwd=self.passwd,
                                db=self.db, collection_name=self.collection_name)
        else:
            return None
