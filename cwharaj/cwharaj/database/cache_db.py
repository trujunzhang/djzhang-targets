import logging
from datetime import datetime

from cwharaj.database.base.mysql_db import MysqlDatabase
from cwharaj.items import CacheItem
from cwharaj.utils.crawl_utils import CrawlUtils


class CacheDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(CacheDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_cache(self, url, item=None, index=0):
        logging.debug("process the cache item at position: {}".format(index - 1))

        guid = CrawlUtils.get_guid(url)

        item["url"] = url
        item["guid"] = guid
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        if self.check_exist_by_id(item["id"]):
            logging.debug("  item exist {} from {} on the cache database".format(item["id"], item["url_from"]))
        else:
            self.insert_for_cache(item)

    def get_oldest_row(self, _last, url_from):
        logging.debug("Get oldest row")

        if _last:
            logging.debug("  1. delete the row by the last url: {}".format(_last))
            self.delete_row(_last, url_from)

        # Query the oldest cache item.
        return self.find_oldest_for_cache(url_from)

    def delete_row(self, _last, url_from):
        # 1. Parse the url and get the unique id.
        from cwharaj.items import WebsiteTypes
        _position = WebsiteTypes.get_id_index(url_from)

        from cwharaj.utils.crawl_utils import CrawlUtils
        _id = CrawlUtils.url_parse_id_from_page_url(_last, _position)
        logging.debug("  2. get the last url's id: {}".format(_id))

        # Query the deleted item count, must be equal to 1.
        sql = """ SELECT 1 FROM {} WHERE id = '{}'""".format(self.collection_name, _id)
        count = self._get_count(sql, self.collection_name)
        logging.debug("  3. found the deleted item count: {} by id".format(count))
        if count:

            _connection = self.get_client()
            _cursor = _connection.cursor()
            sql = """ DELETE FROM {} WHERE {} = '{}'""".format(self.collection_name, 'id', _id)
            try:
                # Execute the SQL command
                _cursor.execute(sql)
                # Commit your changes in the database
                _connection.commit()
            except Exception, e:
                # Rollback in case there is any error
                _connection.rollback()
                logging.debug(
                    "  mysql: delete the last row on the {} failure, {}".format(self.collection_name, e))
            finally:
                _cursor.close()
                _connection.close()

                logging.debug(
                    "  4. deleted cache row, id: {}, deleted count: {}, from the {}"
                        .format(_id, _cursor.rowcount, url_from))

    def _get_cache_total_count(self):
        _count = 0
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = """ SELECT * FROM {} """.format(self.collection_name)
        try:
            # Execute the SQL command
            _cursor.execute(sql)
            _count = _cursor.rowcount
        except Exception, e:
            logging.debug(
                "  mysql: get count  on the {} failure, {}".format(self.collection_name, e))
        finally:
            _cursor.close()
            _connection.close()

        return _count

    def find_oldest_for_cache(self, url_from):
        """Query the oldest cache item."""
        total_count = self._get_cache_total_count()

        logging.debug(
            "  mysql: find the total count {} on the {}".format(total_count, self.collection_name))

        _excep = None
        row = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        found_count = 0

        sql = "SELECT guid,id,url,url_from,created_at FROM  {} WHERE url_from = '{}' ORDER BY {} ASC LIMIT 1".format(
            self.collection_name, url_from, 'created_at')

        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Get the row data
            data = _cursor.fetchone()
            found_count = _cursor.rowcount
            if data:
                row = CacheItem(
                    guid=data[0],
                    id=data[1],
                    url=data[2],
                    url_from=data[3],
                    created_at=data[4]
                )
        except Exception, e:
            _excep = e
        finally:
            _cursor.close()
            _connection.close()

        if _excep:
            logging.debug("  mysql: find the oldest row on the {} failure, {}".format(self.collection_name, _excep))
        else:
            logging.debug(
                "  mysql: find the count {} for the oldest row on the {}".format(found_count, self.collection_name))

        return row
