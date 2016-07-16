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
    def get_model_id_by_url_from(cls, _page_url, url_from):
        from cwharaj.scraped_websites import WebsiteTypes
        position = WebsiteTypes.get_id_index(url_from)

        from urlparse import urlparse
        array = urlparse(_page_url).path.split('/')

        # logging.debug("  1. array split length: {}".format(len(array)))
        if len(array) >= position:
            _id = array[position]
            # logging.debug("  2. id: {} at position: {}".format(_id, position))
            return _id
