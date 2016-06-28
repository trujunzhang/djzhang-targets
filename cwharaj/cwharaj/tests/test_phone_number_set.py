# coding=utf-8
import unittest
from datetime import datetime

from cwharaj.items import CacheItem
from cwharaj.utils.crawl_utils import CrawlUtils
from cwharaj.utils.phone_number_set import PhoneNumberSet


class PhoneNumberSetTest(unittest.TestCase):
    def setUp(self):
        self.phoneNumber = PhoneNumberSet()
        self._ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type={}".format("", "")
        self.url = 'https://sa.opensooq.com/ar/search/40616083/فيلا-بالاسكان-الجديد'
        self.model_id = '40616083'

    def test_get_phone_number_item(self):
        self.assertEqual(len(self.phoneNumber.dict.keys()), 0)
        phone_number_item = self.phoneNumber.get_phone_number_item(self.url, self.model_id)
        self.assertEqual(phone_number_item.model_id, self.model_id)
        self.assertEqual(len(self.phoneNumber.dict.keys()), 1)
