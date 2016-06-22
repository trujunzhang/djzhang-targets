# -*- coding: utf-8 -*-

import warnings
import unittest
import time

from cwharaj.database_factory import DatabaseFactory, CollectionTypes
from cwharaj.utils.crawl_utils import CrawlUtils
from cwharaj.items import CacheItem, HistoryItem, Ad, WebsiteTypes, City, Member
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

    # def test_get_year_id(self):
    #     _years_row = {
    #         "id": 58,
    #         "text": '2014'
    #     }
    #     _years_id = self._item_db.get_year_id(_years_row['text'])
    #     expect = _years_row['id']
    #     self.assertEqual(expect, _years_id)
    #
    # def test_insert_exist_city(self):
    #     _cities_row = {
    #         "id": 12,
    #         "text": "الجوف"
    #     }
    #     _city_id = self._item_db.save_city(City.get_default(_cities_row['text']))
    #     expect = _cities_row['id']
    #     self.assertEqual(expect, _city_id)
    #
    # def test_insert_new_city(self):
    #     _cities_row = {
    #         "id": 26,
    #         "text": "دبي",
    #         "sql": "INSERT INTO cities(text) VALUES ('دبي')"
    #     }
    #     _city_id = self._item_db.save_city(City.get_default(_cities_row['text']))
    #     expect = _cities_row['id']
    #     self.assertEqual(expect, _city_id)

    # def test_insert_exist_member(self):
    #     _memberName = "ابراهيم لطفي"
    #     expect = 51
    #     _member_id = self._item_db.save_member(Member.get_default(_memberName))
    #     self.assertEqual(expect, _member_id)

    def test_insert_new_member(self):
        _memberName = "djzhang"
        expect = 60
        member = Member.get_default(_memberName)

        sql = " INSERT INTO " + "members" + " (username, password, groupnumber, email, timeregister, member_code, documentingmobile, Documentingemail, phone, sendtime, active, now, Lastactivity, subscribe_1, subscribe_2, subscribe_3, The_pay_commission) VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')".format(
            member['username'], member['password'], member['groupnumber'], member['email'], member['timeregister'],
            member['member_code'], member['documentingmobile'], member['Documentingemail'], member['phone'],
            member['sendtime'], member['active'], member['now'], member['Lastactivity'], member['subscribe_1'],
            member['subscribe_2'], member['subscribe_3'], member['The_pay_commission']
        )

        _member_id = self._item_db.save_member(member)
        self.assertEqual(expect, _member_id)
