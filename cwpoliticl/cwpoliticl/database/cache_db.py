import logging
from datetime import datetime

from cwpoliticl.database.base.mysql_db import MysqlDatabase
from cwpoliticl.items import CacheItem
from cwpoliticl.utils.crawl_utils import CrawlUtils


class CacheDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(CacheDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_cache(self, item, index=1):
        sql = "SELECT * FROM {} WHERE url = '{}'".format(self.collection_name, item['url'])
        if self._check_exist_with_sql(sql):
            return

        self._insert_for_cache(item)

    def _insert_for_cache(self, item):
        _connection = self.get_client()
        xcnx = _connection.cursor()

        sql = "INSERT INTO " + self.collection_name + " (url, url_from, created_at) VALUES(%s,%s,%s)"

        try:
            # Execute the SQL command
            xcnx.execute(sql, (item['url'], item['url_from'], item['created_at']))
            # Commit your changes in the database
            _connection.commit()
        except Exception, e:
            # Rollback in case there is any error
            _connection.rollback()
            logging.debug("  mysql: insert the ads_caches row failure, {}".format(e))
        finally:
            xcnx.close()
            _connection.close()

    def get_oldest_row(self, _last, url_from):
        logging.debug("Get the oldest row")

        if _last:
            logging.debug("  1. delete the row by the last url: {}".format(_last))
            self._delete_cache_row(_last, url_from)

        # Query the oldest cache item.
        return self._find_oldest_for_cache()

    def _delete_cache_row(self, _last, url_from):
        _excep = None
        _deleted_count = 0

        # 1. Parse the url and get the unique model_id.
        model_id = CrawlUtils.get_model_id_by_url_from(_last, url_from)
        logging.debug("  2. get the last url's model_id: {}".format(model_id))

        # Query the deleted item count, must be equal to 1.
        sql = """ SELECT 1 FROM {} WHERE model_id = '{}'""".format(self.collection_name, model_id)
        count = self._get_count(sql, self.collection_name)
        logging.debug("  3. found the deleted item count: {} by model_id".format(count))
        if count:

            _connection = self.get_client()
            xcnx = _connection.cursor()
            sql = """ DELETE FROM {} WHERE model_id = '{}'""".format(self.collection_name, model_id)
            try:
                # Execute the SQL command
                xcnx.execute(sql)
                # Commit your changes in the database
                _connection.commit()
                _deleted_count = xcnx.rowcount
            except Exception, e:
                _excep = e
                # Rollback in case there is any error
                _connection.rollback()
                logging.debug("  mysql: delete the oldest cache row, from the {} failure, {}".format(url_from, _excep))
            finally:
                xcnx.close()
                _connection.close()

    def _get_cache_total_count(self):
        _count = 0
        _connection = self.get_client()
        xcnx = _connection.cursor()

        sql = """ SELECT * FROM {} """.format(self.collection_name)
        try:
            # Execute the SQL command
            xcnx.execute(sql)
            _count = xcnx.rowcount
        except Exception, e:
            logging.debug(
                "  mysql: get count  on the {} failure, {}".format(self.collection_name, e))
        finally:
            xcnx.close()
            _connection.close()

        return _count

    def _find_oldest_for_cache(self):
        """Query the oldest cache item."""
        total_count = self._get_cache_total_count()

        logging.debug(
            "  mysql: find the total count {} on the {}".format(total_count, self.collection_name))

        _excep = None
        row = None
        _connection = self.get_client()
        xcnx = _connection.cursor()

        found_count = 0

        sql = "SELECT model_id,url,url_from FROM {}  ORDER BY id ASC LIMIT 1".format(self.collection_name)

        try:
            # Execute the SQL command
            xcnx.execute(sql)
            # Get the row data
            data = xcnx.fetchone()
            found_count = xcnx.rowcount
            if data:
                row = CacheItem.get_default(model_id=data[0], url=data[1], url_from=data[2])
        except Exception, e:
            _excep = e
            logging.debug("  mysql: find the oldest row on the {} failure, {}".format(self.collection_name, _excep))
        finally:
            xcnx.close()
            _connection.close()

        return row
