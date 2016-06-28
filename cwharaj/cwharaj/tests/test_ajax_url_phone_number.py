import unittest


class AjaxUrlPhoneNumberTest(unittest.TestCase):
    def setUp(self):
        self._id = "123"
        self._ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(self._id)

        self._page_url_opensooq = 'https://sa.opensooq.com/ar/search/41957149/عمارة-في-حي-الراية-للتواصل-0541080350'
        self.expect_opensooq = '41957149'

    def test_regex_get_id(self):
        from urlparse import urlparse

        _id = urlparse(self._page_url_opensooq).path.split('/')[3]
        self.assertEqual(_id, self.expect_opensooq)

    def test_parse_id_from_page_url(self):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.url_parse_id_from_page_url(self._page_url_opensooq, 3)
        self.assertEqual(_ID, self.expect_opensooq)
