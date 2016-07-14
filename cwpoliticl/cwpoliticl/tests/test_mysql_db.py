# -*- coding: utf-8 -*-

import unittest

from cwpoliticl import settings
from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
from cwpoliticl.items import HistoryItem


class MysqlDBTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        self.page_url = 'http://indianexpress.com/article/opinion/columns/burhan-wani-death-kashmir-protests-mehbooba-mufti-hurriyat-2909858/'

    # def test_exist_cache_row(self):
    #     exist = self._cache_db._check_exist_with_sql(self.page_url)
    #     self.assertEqual(True, exist)

    # def test_get_oldest_cache_row(self):
    #     row = self._cache_db.get_oldest_row("", "")

    def test_insert_history_row(self):
        self._history_db.save_history(HistoryItem.get_default(url=self.page_url))
