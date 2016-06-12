import MySQLdb
from cwharaj.database.base.base_db import BaseDatabase
import logging
from twisted.enterprise import adbapi
from scrapy.xlib.pydispatch import dispatcher
from scrapy import signals


class MysqlDatabase(BaseDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(MysqlDatabase, self).__init__(host, port, user, passwd, db, collection_name)
        self.host = host
        self.port = port
        self.user = user
        self.passwd = passwd
        self.db = db
        self.collection_name = collection_name

        # Instantiate DB
        self.dbpool = adbapi.ConnectionPool('MySQLdb',
                                            host=self.host,
                                            user=self.user,
                                            passwd=self.passwd,
                                            port=self.port,
                                            db=self.db,
                                            charset='utf8',
                                            use_unicode=True,
                                            cursorclass=MySQLdb.cursors.DictCursor
                                            )
        dispatcher.connect(self.spider_closed, signals.spider_closed)

    def spider_closed(self, spider):
        """ Cleanup function, called after crawing has finished to close open
            objects.
            Close ConnectionPool. """
        self.dbpool.close()

    def open_spider(self):
        pass

    def close_spider(self):
        pass

    def insert_for_cache(self, item):
        self.collection.insert(dict(item))

    def insert_for_history(self, item):
        self.collection.insert(dict(item))

    def insert_for_item(self, item):
        self.collection.insert(dict(item))

    def update_for_history(self, id, item):
        self.collection.update_one({'ID': id}, {'$set': dict(item)}, True)

    def get_count(self, dict):
        count = self.collection.count(dict)
        return count

    def delete_row(self, _last, url_from):
        # 1. Parse the url and get the unique id.
        from cwharaj.items import WebsiteTypes
        _position = WebsiteTypes.get_id_index(url_from)

        from cwharaj.utils.crawl_utils import CrawlUtils
        _id = CrawlUtils.url_parse_id_from_page_url(_last, _position)
        logging.debug("  2. get the last url's id: {}".format(_id))

        # Generate a query dictionary.
        deleted_dict = {'ID': _id}

        # Query the deleted item count, must be equal to 1.
        # count = self.collection.count(deleted_dict)
        count = self.get_count(deleted_dict)
        logging.debug("  3. found the deleted item count: {} by ID".format(count, deleted_dict))
        if count:
            result = self.collection.delete_one(deleted_dict)
            logging.debug(
                "  4. deleted cache row, id: {}, deleted count: {}, from {}"
                    .format(_id, result.deleted_count, url_from))

    def find_oldest_for_cache(self):
        """Query the oldest cache item."""

        cursor = self.collection.find().sort([("created_at", pymongo.ASCENDING)])
        logging.debug("  5. current cache items count: {}".format(cursor.count()))

        row = None
        if cursor.count():
            row = cursor.next()
            logging.debug("  6. found the oldest row sucessfully, ID: {}".format(row['ID']))

        cursor.close()

        return row

    def check_exist_by_id(self, _id):
        cursor = self.collection.find({'ID': _id})
        if cursor.count():
            return True

        return False

    def process_item(self, item, spider):
        query = self.dbpool.runInteraction(self._insert_record, item)
        query.addErrback(self._handle_error)
        return item

    def _insert_record(self, tx, item):
        result = tx.execute(
            """ INSERT INTO table VALUES (1,2,3)"""
        )
        if result > 0:
            self.stats.inc_value('database/items_added')

    def _handle_error(self, e):
        logging.error(e)
