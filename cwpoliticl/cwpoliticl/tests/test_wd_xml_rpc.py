# -*- coding: utf-8 -*-

import unittest
from datetime import datetime

from cwpoliticl import settings
from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes


class WDXmlRpcTest(unittest.TestCase):
    def setUp(self):
        self.opensooq_phone_id = 24
