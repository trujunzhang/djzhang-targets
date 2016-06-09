from cwitune.parser.browse_parser import BrowseParser
from cwitune.parser.response_parser import ResponseParse

from enum import Enum


class DatabaseTypes(Enum):
    cache = 1
    history = 2
    item = 3


class DatabaseFactory:
    def __init__(self):
        pass

    # This is the factory method
    @staticmethod
    def get_database(dbType, uri, db="vps_scrapy_rails", collection="itunes"):

        from cwitune.database.cache_db import CacheDatabase
        from cwitune.database.history_db import HistoryDatabase
        from cwitune.database.item_db import ItemDatabase

        if DatabaseTypes.cache == dbType:
            database = CacheDatabase(uri, db + "_cache", "_cache_" + collection)
            database.open_spider()
            return database
        elif DatabaseTypes.history == dbType:
            history_database = HistoryDatabase(uri, db + "_history", "_history_" + collection)
            history_database.open_spider()
            return history_database
        elif DatabaseTypes.item == dbType:
            return ItemDatabase(uri, db, collection)
        else:
            return None
