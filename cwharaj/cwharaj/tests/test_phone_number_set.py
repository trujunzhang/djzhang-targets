import warnings
import unittest

from cwharaj.items import CacheItem
from cwharaj.utils.crawl_utils import CrawlUtils
from cwharaj.utils.phone_number_set import PhoneNumberSet

class PhoneNumberSetTest(unittest.TestCase):
    def setUp(self):
        self.phoneNumber = PhoneNumberSet()
        self._ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format("123")
        self.page_url = "https://sa.opensooq.com/ar/search/40616083/%D9%81%D9%8A%D9%84%D8%A7-%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D8%A7%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF"
        row = CacheItem(
            url=self.page_url,
            guid=CrawlUtils.get_guid(self.page_url)
        )
        self.phoneNumber.add_row(dict(row), self._ajax_url)

    def test_get_page_url_from_ajax_url(self):
        _url = self.phoneNumber.get_page_url_from_ajax_url(self._ajax_url, "img_base64")
        self.assertEqual(_url, self.page_url, "The same url")
