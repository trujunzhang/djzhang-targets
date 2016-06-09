from datetime import datetime, time
from hashlib import md5


class CrawlUtils(object):
    def __init__(self):
        super(CrawlUtils, self).__init__()


    @classmethod
    def get_guid(self, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        return md5(_url).hexdigest()
