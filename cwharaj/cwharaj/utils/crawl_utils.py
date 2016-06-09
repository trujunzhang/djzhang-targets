from hashlib import md5
import urlparse


class CrawlUtils(object):
    def __init__(self):
        super(CrawlUtils, self).__init__()

    @classmethod
    def get_guid(self, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        return md5(_url).hexdigest()

    @classmethod
    def get_model_id_from_phone_number_url(self, _ajax_url):
        model_id = urlparse.parse_qs(urlparse.urlparse(_ajax_url).query)['model_id'][0]
        return model_id
