# coding=utf-8
import unittest



class PhoneNumberSetTest(unittest.TestCase):
    def setUp(self):
        self._ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type={}".format(
            "45008781", "post")
        self.url = 'https://sa.opensooq.com/ar/search/40616083/فيلا-بالاسكان-الجديد'
        self.model_id = '40616083'

