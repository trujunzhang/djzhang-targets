# -*- coding: utf-8 -*-
import os
import warnings
import unittest

from threading import Event
from unittest import TestCase


class TimeoutError(Exception):
    pass


class AsyncTestCase(TestCase):
    """ Provides functionality similar to tornado.testing.AsyncTestCase except is thread-safe.
    """

    def __init__(self):
        super(AsyncTestCase, self).__init__()
        self._done = Event()

    def setUp(self):
        super(AsyncTestCase, self).setUp()
        self._done.clear()

    def tearDown(self):
        super(AsyncTestCase, self).tearDown()
        self._done.clear()

    def wait(self, timeout=None):
        """ Wait for event to be set.  Raise an exception if the event isn't set by the timeout.
        """
        if timeout is None:
            timeout = get_async_test_timeout()

        self._done.wait(timeout)

        if not self.is_done():
            raise TimeoutError()

    def stop(self):
        """ Set the event to terminate wait.
        """
        self._done.set()

    def is_done(self):
        return self._done.isSet()


# taken from tornado.
def get_async_test_timeout(default=5):
    """Get the global timeout setting for async tests.
    Returns a float, the timeout in seconds.
    """
    try:
        return float(os.environ.get('ASYNC_TEST_TIMEOUT'))
    except (ValueError, TypeError):
        return default


class MysqlDBTest(AsyncTestCase):
    def setUp(self):
        from cwharaj.database.base.mysql_db import MysqlDatabase
        self.cache_database = MysqlDatabase(
            host='localhost',
            port='3306',
            user='haraj',
            passwd='haraj720',
            db="vps_scrapy_rails",
            collection_name="haraj_cache"
        )

    def test_insert_cache_item(self):
        from cwharaj.items import CacheItem
        item = CacheItem(
            url="url",
            guid="123",
            created_at="today",
            ID="321",
            url_from="opensooq"
        )
        self.cache_database.insert_for_cache(item)
        self.wait(10)
