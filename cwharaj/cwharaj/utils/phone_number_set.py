import logging

from cwharaj.utils.crawl_utils import CrawlUtils


class PhoneNumberItem(object):
    page_url = ''
    phone_number_base64 = ''
    phone_data_id = ''
    phone_data_type = ''

    def __init__(self, page_url):
        self.page_url = page_url
        super(PhoneNumberItem, self).__init__()


class PhoneNumberSet(object):
    def __init__(self):
        self.dict = {}
        super(PhoneNumberSet, self).__init__()

    def add_row(self, _id, row):
        self.dict[_id] = PhoneNumberItem(row['url'])
        logging.debug("Added to dict for {}".format(_id))
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

    def get_phone_number_item(self, _id):
        logging.debug("Get phone number item:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))
        item = self.dict[_id]
        if item:
            logging.debug("  1. found by ID {}".format(_id))
            return item

        logging.debug("  3. not found : {}".format(_id))
        return None

    def get_page_url_from_ajax_url(self, _ajax_url, _phone_number_base64):
        logging.debug("Get page url from ajax url:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        _id = CrawlUtils.get_id_from_phone_number_url(_ajax_url)
        logging.debug("  1. id: {}".format(_id))

        if _id:
            row = self.dict[_id]
            if row:
                # opensooq support utf-8, no need encode.
                logging.debug("  2. row exist in the dict: {}".format(row["url"]))

                row["phone_number_base64"] = _phone_number_base64
                return row["url"]

        logging.debug("  3. not found row  from ajax: {}".format(_ajax_url))
        return None

    def get_phone_number_base64(self, _id):
        logging.debug("Get phone number base64 from dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        row = self.dict[_id]
        logging.debug("  1. id: {}".format(_id))

        if row:
            # opensooq support utf-8, no need encode.
            logging.debug("  2. row exist in the dict: {}".format(row["url"]))
            return row["phone_number_base64"]

        logging.debug("  3. not found row from id: {}".format(_id))
        return None

    def remove_row(self, _id):
        logging.debug("Remove row from dict:")
        logging.debug("  *. dict keys: {}".format(self.dict.keys()))

        logging.debug("  1. id: {}".format(_id))

        if _id in self.dict:
            logging.debug("  2. row exist in the dict")
            del self.dict[_id]
            logging.debug("  3. deleted the row sucessfully: {}".format(_id))
            logging.debug("  4. dict keys: {}".format(self.dict.keys()))
