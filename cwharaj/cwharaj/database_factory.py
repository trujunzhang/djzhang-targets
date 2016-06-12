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
    def get_database(collection_type, default_db_type, db="vps_scrapy_rails", collection="harajs"):
        mongo_db_server = "localhost"
        # mongo_db_server = "104.236.77.182"

        from cwharaj.settings import APP_DB_TYPE
        uri = mongo_db_server
        if default_db_type == APP_DB_TYPE.mongo:
            uri = mongo_db_server

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
