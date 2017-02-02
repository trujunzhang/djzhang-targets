from enum import Enum

from cwresponsivesites.database.logs_db import LogDatabase


class CollectionTypes(Enum):
    cache = 1
    history = 2
    posts = 3
    logs = 5


class DatabaseFactory(object):
    def __init__(self, mg_host, mg_collection, collection_name):
        super(DatabaseFactory, self).__init__()
        self.mg_host = mg_host
        self.mg_collection = mg_collection
        self.collection_name = collection_name

    def get_database(self, collection_type):
        if CollectionTypes.posts == collection_type:
            # Caches
            from cwresponsivesites.database.mongo.posts_mg import PostsDatabase
            database = PostsDatabase(self.mg_host, self.mg_collection, collection_name="posts", topics_filter_keys="")
            database.open_spider()
            return database
        elif CollectionTypes.cache == collection_type:
            # Caches
            from cwresponsivesites.database.cache_db import CacheDatabase
            database = CacheDatabase(self.mg_host, self.mg_collection, collection_name=self.collection_name + '_cache')
            database.open_spider()
            return database
        elif CollectionTypes.history == collection_type:
            # History
            from cwresponsivesites.database.history_db import HistoryDatabase
            history_database = HistoryDatabase(self.mg_host,
                                               self.mg_collection,
                                               collection_name=self.collection_name + "_history")
            history_database.open_spider()
            return history_database
        elif CollectionTypes.logs == collection_type:
            # Logs
            log_database = LogDatabase(self.mg_host, self.mg_collection, collection_name=self.collection_name + '_logs')
            log_database.open_spider()
            return log_database

        return None
