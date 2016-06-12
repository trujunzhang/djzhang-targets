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
    def get_database(collection_type, host, port, user, passwd, db, collection_name):
        if CollectionTypes.cache == collection_type:
            from cwharaj.database.cache_db import CacheDatabase
            database = CacheDatabase(host=host, port=port,
                                     user=user, passwd=passwd,
                                     db=db, collection_name=collection_name + '_cache_')
            database.open_spider()
            return database
        elif CollectionTypes.history == collection_type:
            from cwharaj.database.history_db import HistoryDatabase
            history_database = HistoryDatabase(host=host, port=port,
                                               user=user, passwd=passwd,
                                               db=db, collection_name=collection_name + "_history_")
            history_database.open_spider()
            return history_database
        elif CollectionTypes.item == collection_type:
            from cwharaj.database.item_db import ItemDatabase
            return ItemDatabase(host=host, port=port, user=user, passwd=passwd, db=db, collection_name=collection_name)
        else:
            return None
