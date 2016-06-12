# -*- coding: utf-8 -*-

import warnings
import unittest
import time


class MysqlDBTest(unittest.TestCase):
    def setUp(self):
        from cwharaj.database.base.mysql_db import MysqlDatabase
        self.cache_database = MysqlDatabase(
            host='localhost',
            port=3306,
            user='haraj', passwd='haraj720',
            db="vps_scrapy_rails",
            collection_name="haraj_cache")

    def test_insert_cache_item(self):
        self.cache_database.open_spider()

        from cwharaj.items import CacheItem
        item = CacheItem(
            url="url",
            guid="123",
            created_at="today",
            ID="321",
            url_from="opensooq"
        )
        self.cache_database.insert_for_cache(item)
        time.sleep(100)
