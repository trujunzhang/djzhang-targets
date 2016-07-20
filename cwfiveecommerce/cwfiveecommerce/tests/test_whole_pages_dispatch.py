# -*- coding: utf-8 -*-

import unittest

from cwfiveecommerce import settings
from cwfiveecommerce.database_factory import DatabaseFactory, CollectionTypes
from cwfiveecommerce.scraped_websites import WebsiteTypes
from cwfiveecommerce.spiders.dispatch.spider_whole_pages_dispatch import WholePagesStatus


class WholePagesDispatchTest(unittest.TestCase):
    def setUp(self):
        database_factory = DatabaseFactory(settings.SQL_HOST, settings.SQL_PORT,
                                           settings.SQL_USER, settings.SQL_PASSWD,
                                           settings.SQL_DB, settings.SQL_COLLECTION_NAME)

        self._page_db = database_factory.get_database(CollectionTypes.page)

        self.dict = {
            WebsiteTypes.bioliteenergy.value: 'http://www.bioliteenergy.in/politics?page={}',
            WebsiteTypes.firstpost.value: 'http://www.firstpost.com/politics?page={}',
        }
        self.page_index = 1
        self.wp_index = 0
        self.scraped_pages_count = 20
        self.wp_status = WholePagesStatus(self.dict, self._page_db, self.scraped_pages_count)

    def test_get_next_page_url(self):
        # schedulared task 1:
        self._schedulared_task_for_whole_pages()

        # schedulared task 2:

        # schedulared task 3:

    def _schedulared_task_for_whole_pages(self):
        while True:
            url = self.wp_status.get_next_page_url()
            if not url:
                break

            key = (self.dict.keys()[self.wp_index])

            expect_url = self.dict[key].format(self.page_index)
            self.assertEqual(url, expect_url)

            db_page_index = self._page_db.get_page_index(key)
            self.assertEqual(db_page_index, self.page_index)

            self.page_index += 1
            if self.page_index > self.scraped_pages_count:
                self.wp_index += 1
                self.page_index = 1
