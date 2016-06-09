from cwgoogleplay.parser.browse_parser import BrowseParser
from cwgoogleplay.parser.response_parser import ResponseParse

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
    def get_database(dbType, uri, db="vps_scrapy_rails", collection="googleplays"):

        from cwgoogleplay.database.cache_db import CacheDatabase
        from cwgoogleplay.database.history_db import HistoryDatabase
        from cwgoogleplay.database.item_db import ItemDatabase

        if DatabaseTypes.cache == dbType:
            return CacheDatabase(uri, db + "_cache", "_cache_" + collection)
        elif DatabaseTypes.history == dbType:
            return HistoryDatabase(uri, db + "_history", "_history_" + collection)
        elif DatabaseTypes.item == dbType:
            return ItemDatabase(uri, db, collection)
        else:
            return None
