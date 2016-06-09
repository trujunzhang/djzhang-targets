from __future__ import unicode_literals

import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime

import urllib

class DBUtils(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def process_item(self, item, spider):
        _url=item['url']

        item["updatedAt"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        valid = True
        for data in item:
            if not data:
                valid = False
                raise DropItem("Missing {0}!".format(data))

        if valid:
            if self.check_exist(_url):
                valid = False
                raise DropItem("Duplicate item found: {0}!".format(data))
        if valid:
            self.db[self.collection_name].insert(dict(item))
            log.msg("Question added to MongoDB database!",
                    level=log.DEBUG, spider=spider)

    def check_exist_and_save(self, _url):
        # _title = ""
        exist = self.check_exist(_url)

        if not exist:
            _createdAt = str(datetime.now())
            item = {
                # 'title':_title,
                'url': _url,
                'createdAt': _createdAt,
            }
            self.db[self.collection_name].insert(item)

        return exist

    def check_exist(self, _url):
        cursor = self.db[self.collection_name].find({'url': _url})
        if cursor.count():
            return True

        return False

