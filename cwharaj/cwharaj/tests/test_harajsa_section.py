# -*- coding: utf-8 -*-

import unittest

from cwharaj import settings
from cwharaj.database_factory import DatabaseFactory, CollectionTypes
from cwharaj.parser.utils.harajs_section import HarajsSection


class SectionDataxxx:
    url_from = 'https://haraj.com.sa/1113955445/%D9%84%D9%84%D8%A8%D9%8A%D8%B9_%D8%A7%D8%B3%D9%83%D8%A7%D9%84%D9%8A%D8%AF_%D9%85%D9%88%D8%AF%D9%8A%D9%84_2014_%D8%A8%D8%B3%D8%B9%D8%B1_%D8%AC%D9%8A%D8%AF/'
    sections = [
        'اسكاليدا',
        'اسكاليدا 2014',
        'كاديلاك'  # tags_r
    ]

    expect = {
        "tags_f": 275,
        "tags_ff": '58',
        "tags_r": 272,
        "other_final": 'السيارات',
    }


class SectionDatayyy:
    url_from = ''
    sections = [
        "تويوتا",  # tags_r
        "كامري",
        "كامري 2016"
    ]

    expect = {
        "tags_f": 13,
        "tags_ff": '60',
        "tags_r": 1,
        "other_final": 'السيارات',  #
    }


class SectionDatazzz:
    url_from = 'https://haraj.com.sa/1114186091/الرياض/'
    sections = [
        "ساعات",
        "مستلزمات شخصية"  # tags_r
    ]

    expect = {
        "tags_f": 512,
        "tags_ff": '',
        "tags_r": 502,
        "other_final": 'عام',  #
    }


class SectionData:
    url_from = 'https://haraj.com.sa/1113412781/مستودعات_ومصانع_للايجار_او_للبيع_/'
    sections = [
        "عقار حي المشاعل في الرياض",
        "محلات للايجار",
        "محلات للايجار في الرياض",
        "محلات للايجار في حي المشاعل في الرياض"  # tags_r
    ]

    expect = {
        "tags_f": 512,
        "tags_ff": '',
        "tags_r": 502,
        "other_final": 'عام',  #
    }


class HarajsSecionTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._item_db = database_factory.get_database(CollectionTypes.item)
        self.section_data = SectionData()
        self.expect = self.section_data.expect

        self.section_mgr = HarajsSection(self.section_data.sections, self._item_db)

    def test_parse_section(self):
        _section_item = self.section_mgr.get_section_item()

        _tags_f = _section_item.ads_tags_F
        _tags_ff = '{}'.format(_section_item.ads_tags_FF)
        _tags_r = _section_item.ads_tags_R
        _other_final = _section_item.type_ads_other_final.encode('utf-8')

        self.assertEqual(_tags_f, self.expect["tags_f"])
        self.assertEqual(_tags_ff, self.expect["tags_ff"])
        self.assertEqual(_tags_r, self.expect["tags_r"])
        self.assertEqual(_other_final, self.expect["other_final"])
