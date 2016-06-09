import logging

from cwharaj.utils.crawl_utils import CrawlUtils


class PhoneNumberSet(object):
    def __init__(self):
        self.dict = {}
        super(PhoneNumberSet, self).__init__()

    def add_row(self, model_id, row):
        self.dict[model_id] = row
        logging.debug("Get ajax url and added to dict for {}".format(model_id))

    def get_page_url_from_ajax_url(self, _ajax_url, _phone_number_base64):
        logging.debug("Get page url from ajax url:")
        model_id = CrawlUtils.get_model_id_from_phone_number_url(_ajax_url)
        logging.debug("  1. model_id: {}".format(model_id))
        if model_id:
            row = self.dict[model_id]
            if row:
                row["phone_number_base64"] = _phone_number_base64
                return row["url"]

        return None

    def get_phone_number_base64(self, model_id):
        row = self.dict[model_id]
        if row:
            return row["phone_number_base64"]

        return None

    def check_exist(self, model_id):
        if model_id in self.dict:
            return True

        return False

    def remove_row(self, model_id):
        if self.check_exist(model_id):
            del self.dict[model_id]
