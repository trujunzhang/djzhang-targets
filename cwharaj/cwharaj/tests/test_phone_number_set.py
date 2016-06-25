import unittest
from datetime import datetime

from cwharaj.items import CacheItem
from cwharaj.utils.crawl_utils import CrawlUtils
from cwharaj.utils.phone_number_set import PhoneNumberSet


class PhoneNumberSetTest(unittest.TestCase):
    def setUp(self):
        self.phoneNumber = PhoneNumberSet()
        self._ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type={}".format("", "")
        self.url = "https://sa.opensooq.com/ar/search/40616083/%D9%81%D9%8A%D9%84%D8%A7-%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D8%A7%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF"
        row = CacheItem(
            ID="123",
            url=self.url,
            guid=CrawlUtils.get_guid(self.url)
        )
        self.phoneNumber.add_row(row['ID'], row)

    # def test_get_id_from_phone_number_url(self):
    #     CrawlUtils.get_id_from_phone_number_url(self._ajax_url)


    def test_mysql_microsecond(self):
        dt = datetime.now()
        value = dt.microsecond
        x = 0
