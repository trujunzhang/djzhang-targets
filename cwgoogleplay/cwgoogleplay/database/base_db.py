import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime

from cwgoogleplay.utils.crawl_utils import CrawlUtils


class BaseDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def process_item(self, url, item=None):
        pass

    def check_exist(self, _url):
        cursor = self.db[self.collection_name].find({'guid': CrawlUtils.get_guid(_url)})
        if cursor.count():
            return True

        return False
