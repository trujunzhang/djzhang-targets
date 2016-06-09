import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime


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

    def process_navbar_item(self, navItem, spider):
        navItem["updated_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        valid = True
        for data in navItem:
            if not data:
                valid = False
                raise DropItem("Missing {0}!".format(data))

        if valid:
            if self.check_navbar_item_exist(navItem):
                valid = False
                raise DropItem("Duplicate item found: {0}!".format(navItem))

        if valid:
            self.db[self.collection_name].insert(dict(navItem))
            log.msg("Question added to MongoDB database!",
                    level=log.DEBUG, spider=spider)

    def process_item(self, item, spider):
        _url = item['url']
        guid = self._get_guid(_url)

        item["guid"] = guid
        item["updated_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

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

    def check_history_exist(self, _url):
        return self.check_exist(_url)

    def save_history(self, _url):
        exist = self.check_exist(_url)

        if not exist:
            _createdAt = str(datetime.now())
            item = {
                'guid': self._get_guid(_url),
                'url': _url,
                'created_at': _createdAt,
            }
            self.db[self.collection_name].insert(item)
        else:
            log.msg("already crawled: {0}".format(_url))

        return exist

    def check_navbar_item_exist(self, navItem):
        sub1 = navItem["sub1"]
        sub2 = navItem["sub2"]
        sub3 = navItem["sub3"]
        cursor = self.db[self.collection_name].find(
            {
                'sub1': sub1,
                'sub2': sub2,
                'sub3': sub3
            }
        )
        if cursor.count():
            return True

        return False

    def check_exist(self, _url):
        cursor = self.db[self.collection_name].find({'guid': self._get_guid(_url)})
        if cursor.count():
            return True

        return False

    def _get_guid(self, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        return md5(_url).hexdigest()
