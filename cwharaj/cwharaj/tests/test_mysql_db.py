# -*- coding: utf-8 -*-

import warnings
import unittest
import time

from cwharaj.database_factory import DatabaseFactory, CollectionTypes
from cwharaj.utils.crawl_utils import CrawlUtils
from cwharaj.items import CacheItem, HistoryItem, Ad, WebsiteTypes, City
from datetime import datetime
from cwharaj import settings


class MysqlDBTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        self._cache_url = "https://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-اليومي-والشهري-والسنوي-حي-الأمانة-شمال-الرياض"
        self._cache_from = WebsiteTypes.opensooq.value

    # def test_insert_cache_row(self):
    #     _guid = "1234321"
    #     _id = CrawlUtils.url_parse_id_from_page_url(self._cache_url, 3)
    #
    #     self._cache_db.open_spider()
    #     item = CacheItem(
    #         url=self._cache_url,
    #         guid=_guid,
    #         created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
    #         ID=_id,
    #         url_from=self._cache_from
    #     )
    #     self._cache_db.insert_for_cache(item)

    # def test_oldest_cache(self):
    #     self._cache_db.open_spider()
    #
    #     # row = self._cache_db.find_oldest_for_cache()
    #
    #     self._cache_db.delete_row(self._cache_url, self._cache_from)


    # def test_insert_history_row(self):
    #     _url = "https://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-اليومي-والشهري-والسنوي-حي-الأمانة-شمال-الرياض"
    #     _guid = "1234321"
    #     # _id = CrawlUtils.url_parse_id_from_page_url(_url, 3)
    #     _id = "123"
    #
    #     self._history_db.open_spider()
    #     item = HistoryItem(
    #         url=_url,
    #         guid=_guid,
    #         created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
    #         ID=_id
    #     )
    #     self._history_db.update_for_history(_id, item)

    # def test_insert_item_row(self):
    #     _url = "https://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-اليومي-والشهري-والسنوي-حي-الأمانة-شمال-الرياض"
    #     _guid = "1234321"
    #     # _id = CrawlUtils.url_parse_id_from_page_url(_url, 3)
    #     _id = "123"
    #
    #     # _section = ['section']
    #     _section = []
    #
    #     self._item_db.open_spider()
    #     item = Ad(
    #         url=_url,
    #         guid=_guid,
    #         created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
    #         updated_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
    #
    #         ID=_id,
    #         city='city',
    #         time='time',
    #         title='title',
    #         pictures=['pic1', 'pic2'],
    #         subject='subject',
    #         contact='contact',
    #         number='number',
    #
    #         # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    #         url_from='opensooq',
    #
    #         address='address',
    #         memberName='member name',
    #         description='description',
    #         section=_section,
    #     )
    #     self._item_db.insert_for_item(item)

    def test_insert_exist_city(self):
        _ads_city = "الجوف"
        _city_id = self._item_db.save_city(City.get_default(_ads_city))
        expect = 12
        self.assertEqual(expect, _city_id)
