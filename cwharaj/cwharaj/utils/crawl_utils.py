# -*- coding: utf-8 -*-

import logging
from hashlib import md5


class CrawlUtils(object):
    def __init__(self):
        super(CrawlUtils, self).__init__()

    @classmethod
    # Exception: # ascii codec can't encode charaters
    def get_guid(self, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        try:
            _url = _url.encode('utf-8')
        except Exception, e:
            logging.debug("  converting to utf-8 exception on the get_guid(): {}".format(e))
        return md5(_url).hexdigest()

    @classmethod
    def get_id_from_phone_number_url(self, _ajax_url):
        import urlparse
        # Here ajax_url like 'https://sa.opensooq.com/ar/post/get-phone-number?model_id={123}&model_type=post'
        query = urlparse.parse_qs(urlparse.urlparse(_ajax_url).query)
        if len(query):
            _id = query['model_id'][0]
            return _id
        return None


    # @classmethod
    # def url_parse_xid_from_page_url(self, _page_url, url_from):

    @classmethod
    def get_model_id_from_page_url(self, _page_url, position):
        logging.debug("Get the id from page url:")

        from urlparse import urlparse
        array = urlparse(_page_url).path.split('/')

        logging.debug("  1. array split length: {}".format(len(array)))
        if len(array) >= position:
            _id = array[position]
            logging.debug("  2. id: {} at position: {}".format(_id, position))
            return _id

        logging.debug("  3. split the page url failure: {}".format(_page_url.encode('utf-8')))
        return None
