import logging

from cwharaj.utils.crawl_utils import CrawlUtils


class PhoneNumberSet(object):
    def __init__(self):
        self.dict = {}
        super(PhoneNumberSet, self).__init__()

    def add_row(self, model_id, row):
        self.dict[model_id] = row
        logging.debug("Added to dict for {}".format(model_id))
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

    def get_page_url_from_ajax_url(self, _ajax_url, _phone_number_base64):
        logging.debug("Get page url from ajax url:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        model_id = CrawlUtils.get_model_id_from_phone_number_url(_ajax_url)
        logging.debug("  1. model_id: {}".format(model_id))

        if model_id:
            row = self.dict[model_id]
            if row:
                logging.debug("  2. row exist in the dict: {}".format(row["url"]))

                row["phone_number_base64"] = _phone_number_base64
                return row["url"]

        logging.debug("  3. not found row  from ajax: {}".format(_ajax_url))
        return None

    def get_phone_number_base64(self, model_id):
        logging.debug("Get phone number base64 from dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        row = self.dict[model_id]
        logging.debug("  1. model_id: {}".format(model_id))

        if row:
            logging.debug("  2. row exist in the dict: {}".format(row["url"]))

            return row["phone_number_base64"]

        logging.debug("  3. not found row from model_id: {}".format(model_id))
        return None

    def check_exist(self, model_id):
        if model_id in self.dict:
            return True

        return False

    def remove_row(self, model_id):
        logging.debug("Remove row from dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        logging.debug("  1. model_id: {}".format(model_id))

        if self.check_exist(model_id):
            logging.debug("  2. row exist in the dict.")
            del self.dict[model_id]
            logging.debug("  3. deleted the row sucessfully: {}".format(model_id))
            logging.debug("  4. dict keys: {}".format(self.dict.keys()))
