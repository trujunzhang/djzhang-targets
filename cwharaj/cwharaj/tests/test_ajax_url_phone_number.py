import warnings
import unittest


class AjaxUrlPhoneNumberTest(unittest.TestCase):
    def setUp(self):
        self.model_id = "123"
        self._ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type=post".format(
            self.model_id)

        self._page_url = 'https://sa.opensooq.com/ar/search/39319909/wanghao'

    def test_regex_get_model_id(self):
        from urlparse import urlparse
        model_id = urlparse(self._page_url).path.split('/')[3]
        _len = len(model_id)
