# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import logging


class MongoPipeline(object):
    def __init__(self, default_db_type):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        self._item_db = DatabaseFactory.get_database(CollectionTypes.item, default_db_type)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            default_db_type=crawler.settings.get('DEFAULT_DB_TYPE'),
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
