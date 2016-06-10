# -*- coding: utf-8 -*-

from hashlib import md5
import logging


class CrawlUtils(object):
    def __init__(self):
        super(CrawlUtils, self).__init__()

    @classmethod
    # Exception: # ascii codec can't encode charaters
    def get_guid(self, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        _url = _url.encode('utf-8')
        return md5(_url).hexdigest()

    @classmethod
    def get_id_from_phone_number_url(self, _ajax_url):
        import urlparse
        # Here ajax_url like 'https://sa.opensooq.com/ar/post/get-phone-number?model_id={123}&model_type=post'
        _model_id = urlparse.parse_qs(urlparse.urlparse(_ajax_url).query)['model_id'][0]
        return _model_id

    @classmethod
    def get_id_from_page_url(self, _page_url, position):
        logging.debug("Get model_id from page url:")

        from urlparse import urlparse
        array = urlparse(_page_url).path.split('/')

        logging.debug("  1. array: {}".format(len(array)))
        if len(array) >= position:
            model_id = array[position]
            logging.debug("  2. model_id: {} at position: {}".format(model_id, position))
            return model_id

        logging.debug("  3. split the page url failure: {}".format(_page_url))
        return None
