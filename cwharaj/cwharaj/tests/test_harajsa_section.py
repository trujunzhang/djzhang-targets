# -*- coding: utf-8 -*-

import warnings
import unittest

from cwharaj import settings
from cwharaj.database_factory import DatabaseFactory, CollectionTypes
from cwharaj.parser.section.harajs_section import HarajsSection


class HarajsSecionTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._item_db = database_factory.get_database(CollectionTypes.item)

        _sections = [
            "تويوتا",
            "كامري",
            "كامري 2016"
        ]
        # https://haraj.com.sa/1113955445/%D9%84%D9%84%D8%A8%D9%8A%D8%B9_%D8%A7%D8%B3%D9%83%D8%A7%D9%84%D9%8A%D8%AF_%D9%85%D9%88%D8%AF%D9%8A%D9%84_2014_%D8%A8%D8%B3%D8%B9%D8%B1_%D8%AC%D9%8A%D8%AF/
        _sections = [
            'اسكاليدا',
            'اسكاليدا 2014',
            'كاديلاك'
        ]

        self.section_mgr = HarajsSection(_sections, self._item_db)

    def test_parse_section(self):
        _section_item = self.section_mgr.get_section_item()
