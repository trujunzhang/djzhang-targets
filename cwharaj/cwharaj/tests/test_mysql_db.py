# -*- coding: utf-8 -*-

import warnings
import unittest
import time

from cwharaj.utils.crawl_utils import CrawlUtils
from cwharaj.items import CacheItem, HistoryItem, Haraj, WebsiteTypes
from datetime import datetime


class MysqlDBTest(unittest.TestCase):
    def setUp(self):
        from cwharaj.database.base.mysql_db import MysqlDatabase

        self._cache_url = "https://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-اليومي-والشهري-والسنوي-حي-الأمانة-شمال-الرياض"
        self._cache_from = WebsiteTypes.opensooq.value
        # db_type = ''
        # db_type = '_history'
        db_type = '_cache'

        self.mysql_database = MysqlDatabase(
            host='localhost',
            port=3306,
            user='haraj', passwd='haraj720',
            db="vps_scrapy_rails",
            collection_name="haraj{}".format(db_type))

    # def test_insert_cache_row(self):
    #     _guid = "1234321"
    #     _id = CrawlUtils.url_parse_id_from_page_url(self._cache_url, 3)
    #
    #     self.mysql_database.open_spider()
    #     item = CacheItem(
    #         url=self._cache_url,
    #         guid=_guid,
    #         created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
    #         ID=_id,
    #         url_from=self._cache_from
    #     )
    #     self.mysql_database.insert_for_cache(item)

    def test_oldest_cache(self):
        self.mysql_database.open_spider()

        # row = self.mysql_database.find_oldest_for_cache()

        self.mysql_database.delete_row(self._cache_url, self._cache_from)


        # def test_insert_history_row(self):
        #     _url = "https://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-اليومي-والشهري-والسنوي-حي-الأمانة-شمال-الرياض"
        #     _guid = "1234321"
        #     # _id = CrawlUtils.url_parse_id_from_page_url(_url, 3)
        #     _id = "123"
        #
        #     self.mysql_database.open_spider()
        #     item = HistoryItem(
        #         url=_url,
        #         guid=_guid,
        #         created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
        #         ID=_id
        #     )
        #     self.mysql_database.update_for_history(_id, item)




        # def test_insert_item_row(self):
        #     _url = "https://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-اليومي-والشهري-والسنوي-حي-الأمانة-شمال-الرياض"
        #     _guid = "1234321"
        #     # _id = CrawlUtils.url_parse_id_from_page_url(_url, 3)
        #     _id = "123"
        #
        #     self.mysql_database.open_spider()
        #     item = Haraj(
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
        #         section=['section'],
        #     )
        #     self.mysql_database.insert_for_item(item)
