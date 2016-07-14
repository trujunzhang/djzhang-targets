# -*- coding: utf-8 -*-

import unittest

from cwpoliticl import settings
from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes


class MysqlDBTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

    # def test_exist_cache_row(self):
    #     url = 'http://www.dnaindia.com/analysis/editorial-dnaedit-ruins-of-the-iraq-war-2232200'
    #     exist = self._cache_db._check_exist_with_sql(url)
    #     self.assertEqual(True, exist)

    # def test_get_oldest_cache_row(self):
    #     row = self._cache_db.get_oldest_row("", "")

    def test_remove_last_cache_row(self):
        row = self._cache_db.get_oldest_row(
            "http://indianexpress.com/article/opinion/editorials/tony-blair-2003-iraq-war-2909991/", "indianexpress")

        # def test_insert_history_row(self):
        #     item = HistoryItem.get_default(url=self._page_url, id_ads=self._ads_id, url_from=self._page_from)
        #     self._history_db.save_history(item)

        # def test_exist_history_row(self):
        #     item = HistoryItem.get_default(self._page_url, self._ads_id, self._page_from)
        #     self._history_db.check_history_exist(item['model_id'])

        # def test_get_year_id(self):
        #     _years_row = {
        #         "id": 58,
        #         "text": '2014'
        #     }
        #     _years_id = self._item_db.get_year_id(_years_row['text'])
        #     expect = _years_row['id']
        #     self.assertEqual(expect, _years_id)
        #
        # def test_insert_exist_cities(self):
        #     _cities_row = {
        #         "id": 12,
        #         "text": "الجوف"
        #     }
        #     _city_id = self._item_db.save_city(City.get_default(_cities_row['text']))
        #     expect = _cities_row['id']
        #     self.assertEqual(expect, _city_id)
