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
            "تويوتا"
            "كامري",
            "كامري 2016",
        ]
        self.section_mgr = HarajsSection(_sections, self._item_db)

    def test_parse_section(self):
        _section_item = self.section_mgr.get_section_item()
