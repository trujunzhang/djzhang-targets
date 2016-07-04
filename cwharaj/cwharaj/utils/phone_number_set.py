import logging

from cwharaj.items import Ad
from cwharaj.utils.crawl_utils import CrawlUtils


class PhoneNumberItem(object):
    model_id = ''
    url = ''
    # Sometime phone_data_id is the same as model_id.
    phone_data_id = ''
    phone_data_type = ''
    _His_announcement_id = ''
    id_ads = '-1'  # -1 means that no row on the database.

    def __init__(self, url, model_id):
        self.url = url
        self.model_id = model_id
        super(PhoneNumberItem, self).__init__()

    def get_ajax_url(self):
        # No phone number found on the page.
        if not self.phone_data_id:
            return None

        return "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type={}".format(self.phone_data_id,
                                                                                                   self.phone_data_type)


class PhoneNumberSet(object):
    def __init__(self):
        self.dict = {}
        super(PhoneNumberSet, self).__init__()

    def add_row(self, url, model_id):
        self.dict[model_id] = PhoneNumberItem(url, model_id)
        logging.debug("Added to dict for {}".format(model_id))
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

    def get_phone_number_item(self, url, _model_id):
        logging.debug("Get phone number item:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))
        if _model_id not in self.dict.keys():
            self.add_row(url, _model_id)

        item = self.dict[_model_id]
        if item:
            logging.debug("  1. found by model_id {}".format(_model_id))
            return item

        logging.debug("  3. not found : {}".format(_model_id))
        return None

    def get_item_from_ajax_url(self, _ajax_url):
        logging.debug("Get item from ajax url and remove dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        _phone_id = CrawlUtils.get_id_from_phone_number_url(_ajax_url)
        logging.debug("  1. parse phone_id from the ajax url: {}".format(_phone_id))

        if _phone_id:
            for key, value in self.dict.iteritems():
                if value.phone_data_id == _phone_id:
                    _item = value
                    logging.debug("  2. found id from ajax url: {}".format(key))
                    return _item

        logging.debug("  3. not found item from ajax url: {}".format(_ajax_url))

    def remove_row(self, model_id):
        logging.debug("Remove row from dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        logging.debug("  1. id: {}".format(model_id))

        if model_id in self.dict:
            logging.debug("  2. row exist in the dict")
            del self.dict[model_id]
            logging.debug("  3. deleted the dict row {}, successfully".format(model_id))
            logging.debug("  4. after, dict keys: {}".format(self.dict.keys()))
