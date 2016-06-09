# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html


import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime
from hashlib import md5


class MongoPipeline(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        from cwgithub.DBUtils import DBUtils
        self.dbutils = DBUtils(mongo_uri, mongo_db, collection_name)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGODB_SERVER'),
            mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
            collection_name=crawler.settings.get('MONGODB_COLLECTION')
        )

    def open_spider(self, spider):
        self.dbutils.open_spider()

    def close_spider(self, spider):
        self.dbutils.close_spider()

    def process_item(self, item, spider):
        self.dbutils.process_item(item,spider)
        return item

    def _handle_error(self, failure, item, spider):
        """Handle occurred on db interaction."""
        # do nothing, just log
        log.err(failure)
