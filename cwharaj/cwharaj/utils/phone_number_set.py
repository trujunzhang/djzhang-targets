import logging

from cwharaj.items import Ad
from cwharaj.utils.crawl_utils import CrawlUtils


class PhoneNumberItem(object):
    phone_data_id = ''
    phone_data_type = ''
    _His_announcement_id = ''
    scrapy_item = Ad()

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

    def add_row(self, model_id):
        self.dict[model_id] = PhoneNumberItem()
        logging.debug("Added to dict for {}".format(model_id))
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

    def get_phone_number_item(self, _id):
        logging.debug("Get phone number item:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))
        if _id in self.dict.keys():
            item = self.dict[_id]
            if item:
                logging.debug("  1. found by ID {}".format(_id))
                return item

        logging.debug("  3. not found : {}".format(_id))
        return None

    def get_item_from_ajax_url_and_remove_dict(self, _ajax_url):
        logging.debug("Get item from ajax url and remove dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        _phone_id = CrawlUtils.get_id_from_phone_number_url(_ajax_url)
        logging.debug("  1. parse phone_id from the ajax url: {}".format(_phone_id))

        _id = None
        _item = None
        if _phone_id:
            for key, value in self.dict.iteritems():
                if value.phone_data_id == _phone_id:
                    _id = key
                    _item = value
                    logging.debug("  2. found id from ajax url: {}".format(_id))
                    break

        if _id:
            self.remove_row(_id)
            return _item.scrapy_item

        logging.debug("  3. not found item from ajax url: {}".format(_ajax_url))
        return None

    def remove_row(self, _id):
        logging.debug("Remove row from dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        logging.debug("  1. id: {}".format(_id))

        if _id in self.dict:
            logging.debug("  2. row exist in the dict")
            del self.dict[_id]
            logging.debug("  3. deleted the row sucessfully: {}".format(_id))
            logging.debug("  4. after, dict keys: {}".format(self.dict.keys()))
