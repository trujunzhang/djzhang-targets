# -*- coding: utf-8 -*-

import unittest

from cwjetbrains import settings
from cwjetbrains.database_factory import DatabaseFactory, CollectionTypes
from cwjetbrains.scraped_websites import websites_parses, get_crawler_name, is_pagination
from cwjetbrains.utils.parser_util import ParserUtils


class OfflineParserTest(unittest.TestCase):
    url_from = get_crawler_name()['url_from']

    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._parser = websites_parses.get(self.url_from)

    def test_offline_website(self):
        response = ParserUtils.get_offline_selector(self.url_from)
        if is_pagination:
            self._parser.parse_paginate(get_crawler_name()['url_pagination'], response, self._cache_db,
                                        self._history_db)
