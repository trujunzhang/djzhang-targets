from enum import Enum


class CollectionTypes(Enum):
    cache = 1
    history = 2
    item = 3


class DatabaseFactory:
    def __init__(self):
        pass

    # This is the factory method
    @staticmethod
    def get_database(collection_type, host, port, user, passwd, db, collection):

        from cwharaj.database.cache_db import CacheDatabase
        from cwharaj.database.history_db import HistoryDatabase
        from cwharaj.database.item_db import ItemDatabase

        if CollectionTypes.cache == collection_type:
            database = CacheDatabase(uri, db + "_cache", "_cache_" + collection)
            database.open_spider()
            return database
        elif CollectionTypes.history == collection_type:
            history_database = HistoryDatabase(uri, db + "_history", "_history_" + collection)
            history_database.open_spider()
            return history_database
        elif CollectionTypes.item == collection_type:
            return ItemDatabase(uri, db, collection)
        else:
            return None
