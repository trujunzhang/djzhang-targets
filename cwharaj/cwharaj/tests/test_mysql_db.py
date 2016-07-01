# -*- coding: utf-8 -*-

import unittest
from datetime import datetime

from cwharaj import settings
from cwharaj.database_factory import DatabaseFactory, CollectionTypes
from cwharaj.items import CacheItem, HistoryItem, Ad, WebsiteTypes, City, Member, Comment, Section, OpensooqPhone, \
    OpensooqCommentDateItem
from cwharaj.parser.utils.section_item import SectionItem
from cwharaj.utils.crawl_utils import CrawlUtils


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

        self._ads_id = 70
        self._ads_item = Ad.get_default(
            section_item=SectionItem.get_default(),
            _ads_title="اسكاليد موديل 2016 بسعر جي",
            _city_id='44',
            _ads_contact="123454321",
            _ads_body="test mysql db",
            _image_link="https://img1cdn.haraj.com.sa/userfiles30/2015-07-18/55aa1ba3366cd.jpeg,https://img1cdn.haraj.com.sa/userfiles30/2015-07-18/55aa1bab49a3b.jpeg,https://img1cdn.haraj.com.sa/userfiles30/2015-07-18/55aa1bb0b6ca6.jpeg",
            _His_announcement_id=60,
            _type_ads_or=1, _close_ads=0
        )

        self._member_id = 60
        self._memberName = "djzhang"

        self.opensooq_phone_id = 24

    # def test_insert_cache_row(self):
    #     _guid = "1234321"
    #     _id = CrawlUtils.url_parse_id_from_page_url(self._cache_url, 3)
    #
    #     self._cache_db.open_spider()
    #     item = CacheItem(
    #         url=self._cache_url,
    #         guid=_guid,
    #         created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
    #         id=_id,
    #         url_from=self._cache_from
    #     )
    #     self._cache_db.insert_for_cache(item)
    #
    # def test_oldest_cache(self):
    #     self._cache_db.open_spider()
    #
    #     # row = self._cache_db.find_oldest_for_cache()
    #
    #     self._cache_db.delete_row(self._cache_url, self._cache_from)
    #
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
    #         id=_id
    #     )
    #     self._history_db.update_for_history(_id, item)
    #
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
    #
    # def test_insert_exist_members(self):
    #     _memberName = "ابراهيم لطفي"
    #     expect = 51
    #     _member_id = self._item_db.save_member(Member.get_default(_memberName))
    #     self.assertEqual(expect, _member_id)
    #
    # def test_insert_new_members(self):
    #     expect = self._member_id
    #     member = Member.get_default(self._memberName)
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
    #
    # def test_insert_exist_ads(self):
    #     expect = 21
    #     item = Ad()
    #     item['ads_title'] = 'جمس سوبربان  دبل  موديل 2012 اللون فضي للبيع'
    #     _ads_id = self._item_db.save_ad(item)
    #     self.assertEqual(expect, _ads_id)
    #
    # def test_insert_new_ads(self):
    #     expect = self._ads_id
    #     item = self._ads_item
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
    #
    # def test_insert_exist_comments(self):
    #     id_ads = 1
    #     id_His_response = 1
    #     comment = Comment.get_default(id_ads, id_His_response, "up")
    #     expect = 8
    #     _comment_id = self._item_db.save_comment(comment)
    #     self.assertEqual(expect, _comment_id)
    #
    # def test_insert_new_comments(self):
    #     id_ads = 70
    #     id_His_response = 60
    #     comment = Comment.get_default(id_ads, id_His_response, "my first comment!")
    #
    #     sql = " INSERT INTO comments (id_ads, id_His_response, text, Time_added_co) VALUES ('{}','{}','{}','{}')".format(
    #         comment['id_ads'], comment['id_His_response'], comment['text'], comment['Time_added_co']
    #     )
    #     expect = 140
    #     _comment_id = self._item_db.save_comment(comment)
    #     self.assertEqual(expect, _comment_id)
    #
    # def test_insert_exist_section(self):
    #     section = Section.get_default('خدمات اخرى')
    #     expect = 500
    #     section_item = self._item_db.save_section(section)
    #     self.assertEqual(expect, section_item['id'])
    #
    # def test_insert_new_section(self):
    #     section = Section.get_default('ساعات', 502)
    #     sql = " INSERT INTO section (name, type, Documentto, Contents, linkmodel) VALUES ('{}','{}','{}','{}','{}')".format(
    #         section['name'], section['type'], section['Documentto'], section['Contents'], section['linkmodel']
    #     )
    #     expect = 512
    #     section_item = self._item_db.save_section(section)
    #     self.assertEqual(expect, section_item['id'])

    # def test_update_ads_contact(self):
    #     image_phone = Ad.get_opensooq_phone(self.opensooq_phone_id)
    #     self._item_db.update_ads_contact(self._ads_id, image_phone)
    #
    # def test_update_member_phone(self):
    #     image_phone = Ad.get_opensooq_phone(self.opensooq_phone_id)
    #     self._item_db.update_members_phone(self._member_id, image_phone)

    # def test_insert_opensooq_phone(self):
    #     opensooq_phone = OpensooqPhone.get_default(
    #         'data:image/jpeg;base64,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')
    #
    #     sql = """ INSERT INTO opensooq_phone(phone) VALUES ('{}')""".format(opensooq_phone['phone'])
    #     expect = self.opensooq_phone_id
    #     _opensooq_phone_id = self._item_db.save_opensooq_phone(opensooq_phone)
    #     self.assertEqual(expect, _opensooq_phone_id)

    def test_insert_opensooq_comment_date(self):
        opensooq_comment_date = OpensooqCommentDateItem.get_default('منذ شهر')

        sql = """ INSERT INTO opensooq_comment_date(text, english, seconds) VALUES ('{}','{}','{}')""".format(
            opensooq_comment_date['text'], opensooq_comment_date['english'], opensooq_comment_date['seconds'])
        expect = 22
        _opensooq_comment_date_id = self._item_db.save_opensooq_comment_date(opensooq_comment_date)
        self.assertEqual(expect, _opensooq_comment_date_id)
