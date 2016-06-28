# -*- coding: utf-8 -*-

import unittest

from cwharaj import settings
from cwharaj.database_factory import DatabaseFactory, CollectionTypes
from cwharaj.parser.utils.harajs_section import HarajsSection


class SectionDataxxx:
    url_from = 'https://sa.opensooq.com/ar/search/17978455/دهن-عود-ملكي'
    sections = [
        'سوق السعودية المفتوح',
        'الدمام',  # Member's city
        'ملابس - موضة',  # tag_F
        'عطور'  # tag_R
    ]

    expect = {
        "tags_f": 520,
        "tags_ff": '',
        "tags_r": 519,
    }


class SectionData:
    url_from = 'https://sa.opensooq.com/ar/search/43370140/محرر-صحفي-سوداني-الجنسية'
    sections = [
        'سوق السعودية المفتوح',
        'الدمام',  # Member's city
        'عطور'  # tag_R
    ]

    expect = {
        "tags_f": '',
        "tags_ff": '',
        "tags_r": 519,
    }


class OpensooqSecionTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._item_db = database_factory.get_database(CollectionTypes.item)
        self.section_data = SectionData()
        self.expect = self.section_data.expect

        self.section_mgr = HarajsSection(self.section_data.sections, self._item_db)

    def test_parse_section(self):
        _section_item = self.section_mgr.get_section_item_for_opensooq()

        _tags_f = '{}'.format(_section_item.ads_tags_F)
        _tags_ff = '{}'.format(_section_item.ads_tags_FF)
        _tags_r = '{}'.format(_section_item.ads_tags_R)

        self.assertEqual(_tags_f, self.expect["tags_f"])
        self.assertEqual(_tags_ff, self.expect["tags_ff"])
        self.assertEqual(_tags_r, self.expect["tags_r"])
