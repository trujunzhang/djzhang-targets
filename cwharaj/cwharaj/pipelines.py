
# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import logging

class MongoPipeline(object):
    def __init__(self, mongo_uri):
        from cwharaj.database_factory import DatabaseFactory, DatabaseTypes
        self._item_db = DatabaseFactory.get_database(DatabaseTypes.item, mongo_uri)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGODB_SERVER'),
        )

    def open_spider(self, spider):
        self._item_db.open_spider()

    def close_spider(self, spider):
        self._item_db.close_spider()

    def process_item(self, item, spider):
        self._item_db.process_item(item['url'], item)
        return item

    def _handle_error(self, failure, item, spider):
        """Handle occurred on db interaction."""
        # do nothing, just log
        logging.error(failure)

