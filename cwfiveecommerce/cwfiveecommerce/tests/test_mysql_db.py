# -*- coding: utf-8 -*-

import unittest

from cwfiveecommerce import settings
from cwfiveecommerce.database_factory import DatabaseFactory, CollectionTypes
from cwfiveecommerce.scraped_websites import WebsiteTypes


class MysqlDBTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)
        self._page_db = database_factory.get_database(CollectionTypes.page)

        self.page_url = 'http://indianexpress.com/article/opinion/columns/burhan-wani-death-kashmir-protests-mehbooba-mufti-hurriyat-2909858/'
        self.url_from = WebsiteTypes.indianexpress.value

    # def test_exist_cache_row(self):
    #     exist = self._cache_db._check_exist_with_sql(self.page_url)
    #     self.assertEqual(True, exist)

    # def test_get_oldest_cache_row(self):
    #     row = self._cache_db.get_oldest_row("", "")

    # def test_get_cache_row_by_url(self):
    #     row = self._cache_db.query_cache_item(self.page_url)
    #     self.assertEqual(row['url_from'], self.url_from)
    #     self.assertEqual(row['url'], self.page_url)
    #     self.assertEqual(row['thumbnail_url'], '//images.indianexpress.com/2016/07/kashmir-small.jpg?w=450')

    # def test_insert_history_row(self):
    #     self._history_db.save_history(HistoryItem.get_default(url=self.page_url))

    def test_get_page_index(self):
        page_index = self._page_db.get_page_index(self.url_from)
        self.assertEqual(page_index, 1)

        # def test_save_page_row(self):
        #     # Firstly, No page item on the database.
        #     page_index = 1
        #     row = self._page_db.query_page_item(self.url_from)
        #     self.assertEqual(row['url_from'], self.url_from)
        #     self.assertEqual(row['page_index'], page_index)
        #     # Secondly, save a page item to the database.
        #     page_index = 22
        #     self._page_db.save_page(PageItem.get_default(self.url_from, page_index))
        #     row = self._page_db.query_page_item(self.url_from)
        #     self.assertEqual(row['url_from'], self.url_from)
        #     self.assertEqual(row['page_index'], page_index)
        #     # Thirdly, update a page item to the database.
        #     page_index = 4444
        #     self._page_db.save_page(PageItem.get_default(self.url_from, page_index))
        #     row = self._page_db.query_page_item(self.url_from)
        #     self.assertEqual(row['url_from'], self.url_from)
        #     self.assertEqual(row['page_index'], page_index)
