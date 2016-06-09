import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime


class jobs(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name
        self.step = 0

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def readyParse(self):
        self.collection = self.db[self.collection_name].find({"from": "upwork"})
        self.count = self.collection.count()

    def next(self):
        if self.step >= self.count:
            return ""

        _url = self.collection[self.step]['url']
        self.step += 1
        return _url
