# -*- coding: utf-8 -*-

import warnings
import unittest
import time

from cwharaj.database_factory import DatabaseFactory, CollectionTypes
from cwharaj.parser.utils.section_item import SectionItem
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
    # def test_insert_exist_cities(self):
    #     _cities_row = {
    #         "id": 12,
    #         "text": "الجوف"
    #     }
    #     _city_id = self._item_db.save_city(City.get_default(_cities_row['text']))
    #     expect = _cities_row['id']
    #     self.assertEqual(expect, _city_id)
    #
    # def test_insert_new_cities(self):
    #     _cities_row = {
    #         "id": 26,
    #         "text": "دبي",
    #         "sql": "INSERT INTO cities(text) VALUES ('دبي')"
    #     }
    #     _city_id = self._item_db.save_city(City.get_default(_cities_row['text']))
    #     expect = _cities_row['id']
    #     self.assertEqual(expect, _city_id)

    # def test_insert_exist_members(self):
    #     _memberName = "ابراهيم لطفي"
    #     expect = 51
    #     _member_id = self._item_db.save_member(Member.get_default(_memberName))
    #     self.assertEqual(expect, _member_id)

    # def test_insert_new_members(self):
    #     _memberName = "djzhang"
    #     expect = 60
    #     member = Member.get_default(_memberName)
    #
    #     sql = " INSERT INTO " + "members" + " (username, password, groupnumber, email, timeregister, member_code, documentingmobile, Documentingemail, phone, sendtime, active, now, Lastactivity, subscribe_1, subscribe_2, subscribe_3, The_pay_commission) VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')".format(
    #         member['username'], member['password'], member['groupnumber'], member['email'], member['timeregister'],
    #         member['member_code'], member['documentingmobile'], member['Documentingemail'], member['phone'],
    #         member['sendtime'], member['active'], member['now'], member['Lastactivity'], member['subscribe_1'],
    #         member['subscribe_2'], member['subscribe_3'], member['The_pay_commission']
    #     )
    #
    #     _member_id = self._item_db.save_member(member)
    #     self.assertEqual(expect, _member_id)


    def test_insert_exist_ads(self):
        expect = 18
        item = Ad()
        item['ads_title'] = 'جمس سوبربان  دبل  موديل 2012 اللون فضي للبيع'
        _ads_id = self._item_db.save_ad(item)
        self.assertEqual(expect, _ads_id)

    # def test_insert_new_ads(self):
    #     expect = 27
    #     section_item = SectionItem.get_default()
    #     item = Ad.get_default(
    #         section_item=section_item,
    #         _ads_title="اسكاليد موديل 2016 بسعر جي",
    #         _city_id='44',
    #         _ads_contact="123454321",
    #         _ads_body="test mysql db",
    #         _image_link="https://img1cdn.haraj.com.sa/userfiles30/2015-07-18/55aa1ba3366cd.jpeg,https://img1cdn.haraj.com.sa/userfiles30/2015-07-18/55aa1bab49a3b.jpeg,https://img1cdn.haraj.com.sa/userfiles30/2015-07-18/55aa1bb0b6ca6.jpeg",
    #         _His_announcement_id=60,
    #         _type_ads_or=1, _close_ads=0
    #     )
    #
    #     sql = " INSERT INTO ads (ads_title, ads_city, ads_tags_R, ads_tags_F, ads_tags_FF, ads_contact, ads_body, image_link, type_ads_other_final, un_model, status, fixing, Time_added, His_announcement, type_ads_or, close_ads, Last_updated_Ad, closecomment, fixed_home, fixed_tub, fixed_sec, fixed_sec2, fixed_sec3, timer_mazad) VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')".format(
    #         item['ads_title'], item['ads_city'], item['ads_tags_R'], item['ads_tags_F'], item['ads_tags_FF'],
    #         item['ads_contact'], item['ads_body'], item['image_link'], item['type_ads_other_final'],
    #         item['un_model'], item['status'], item['fixing'], item['Time_added'], item['His_announcement'],
    #         item['type_ads_or'], item['close_ads'], item['Last_updated_Ad'], item['closecomment'],
    #         item['fixed_home'], item['fixed_tub'], item['fixed_sec'], item['fixed_sec2'], item['fixed_sec3'],
    #         item['timer_mazad']
    #     )
    #
    #     _ads_id = self._item_db.save_ad(item)
    #     self.assertEqual(expect, _ads_id)
