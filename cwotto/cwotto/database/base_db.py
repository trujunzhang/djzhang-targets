import pymongo

from cwotto.utils.crawl_utils import CrawlUtils


class BaseDatabase(object):

    def check_exist(self, _url):

        return False
