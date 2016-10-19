from datetime import datetime, time
from hashlib import md5


class CrawlUtils(object):
    def __init__(self):
        super(CrawlUtils, self).__init__()

    @classmethod
    def get_guid(cls, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        return md5(_url).hexdigest()

    @classmethod
    def get_product_id(cls, url):
        """
        href="/p/ajc-kurzblazer-552791036/#variationId=552791094">
        :param url:
        :return:
        """
        split = url.split("#")
        if len(split) == 2:
            # para=/p/ajc-kurzblazer-552791036/
            para = split[0]
            s = para.split('/')
            if len(s) == 4:
                slug = s[2]
                v = slug.split('-')
                if len(v) > 0:
                    product_id = v[len(v) - 1]
                    return product_id

        return None

    @classmethod
    def get_variation_id(cls, url):
        """
        href="/p/ajc-kurzblazer-552791036/#variationId=552791094">
        :param url:
        :return:
        """
        split = url.split("#")
        if len(split) == 2:
            para = split[1]
            s = para.split('=')
            if len(s) == 2:
                variation_id = s[1]
                return variation_id

        return None
