# # -*- coding: utf-8 -*-
#
# # Define your item pipelines here
# #
# # Don't forget to add your pipeline to the ITEM_PIPELINES setting
# # See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
#
# import logging
#
#
# class HarajPipeline(object):
#     def __init__(self, host, port, user, passwd, db, collection_name):
#         from cwharaj.database_factory import DatabaseFactory, CollectionTypes
#
#         self._item_db = DatabaseFactory.get_database(CollectionTypes.item,
#                                                      host=host,
#                                                      port=port,
#                                                      user=user,
#                                                      passwd=passwd,
#                                                      db=db,
#                                                      collection_name=collection_name
#                                                      )
#
#     @classmethod
#     def from_crawler(cls, crawler):
#         return cls(
#             host=crawler.settings.get('SQL_HOST'),
#             port=crawler.settings.get('SQL_PORT'),
#             user=crawler.settings.get('SQL_USER'),
#             passwd=crawler.settings.get('SQL_PASSWD'),
#             db=crawler.settings.get('SQL_DB'),
#             collection_name=crawler.settings.get('SQL_COLLECTION_NAME')
#         )
#
#     def open_spider(self, spider):
#         self._item_db.open_spider()
#
#     def close_spider(self, spider):
#         self._item_db.close_spider()
#
#     def process_item(self, item, spider):
#         self._item_db.process_item(item['url'], item)
#         return item
#
#     def _handle_error(self, failure, item, spider):
#         """Handle occurred on db interaction."""
#         # do nothing, just log
#         logging.error(failure)
