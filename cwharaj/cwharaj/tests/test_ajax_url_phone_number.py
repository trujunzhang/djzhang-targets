import unittest


class AjaxUrlPhoneNumberTest(unittest.TestCase):
    def setUp(self):
        self._id = "123"
        self._ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(self._id)

        # self._page_url = 'https://sa.opensooq.com/ar/search/39319909/wanghao'
        self._page_url = 'https://sa.opensooq.com/ar/search/41957149/%D8%B9%D9%85%D8%A7%D8%B1%D8%A9-%D9%81%D9%8A-%D8%AD%D9%8A-%D8%A7%D9%84%D8%B1%D8%A7%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84-0541080350'
        self.expect = '41957149'

    def test_regex_get_id(self):
        from urlparse import urlparse

        _id = urlparse(self._page_url).path.split('/')[3]
        self.assertEqual(_id, self.expect)

    def test_parse_id_from_page_url(self):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.url_parse_id_from_page_url(self._page_url, 3)
        self.assertEqual(_ID, self.expect)
