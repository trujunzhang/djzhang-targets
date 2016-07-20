import logging

from cwfiveecommerce.database.base.mysql_db import MysqlDatabase
from cwfiveecommerce.items import PageItem


class PageDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(PageDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_page(self, item):
        sql = "SELECT * FROM {} WHERE url_from = '{}'".format(self.collection_name, item['url_from'])
        if self._check_exist_with_sql(sql):
            self._update_for_page(item)
        else:
            self._insert_for_page(item)

    def _insert_for_page(self, item):
        _connection = self.get_client()
        xcnx = _connection.cursor()

        sql = "INSERT INTO " + self.collection_name + " (page_index, url_from, created_at) VALUES(%s,%s,%s)"

        try:
            # Execute the SQL command
            xcnx.execute(sql, (item['page_index'], item['url_from'], item['created_at']))
            # Commit your changes in the database
            _connection.commit()
        except Exception, e:
            # Rollback in case there is any error
            _connection.rollback()
            logging.debug("  mysql: insert the {} row failure, {}".format(self.collection_name, e))
        finally:
            xcnx.close()
            _connection.close()

    def _update_for_page(self, item):
        _connection = self.get_client()
        xcnx = _connection.cursor()

        sql = " UPDATE " + self.collection_name + " SET page_index = %s WHERE url_from = %s"

        try:
            # Execute the SQL command
            xcnx.execute(sql, (item['page_index'], item['url_from']))
            # Commit your changes in the database
            _connection.commit()
        except Exception, e:
            # Rollback in case there is any error
            _connection.rollback()
            logging.debug("  mysql: update the {} row failure, {}".format(self.collection_name, e))
        finally:
            xcnx.close()
            _connection.close()

    def get_page_index(self, url_from):
        item = self.query_page_item(url_from)
        return item['page_index']

    def query_page_item(self, url_from):
        """

        Query the page item by the url_from.
        If not found, create an empty item.

        """

        row = None
        _connection = self.get_client()
        xcnx = _connection.cursor()

        sql = "SELECT url_from,page_index FROM {}  WHERE url_from = '{}'".format(self.collection_name, url_from)

        try:
            # Execute the SQL command
            xcnx.execute(sql)
            # Get the row data
            data = xcnx.fetchone()
            if data:
                row = PageItem.get_default(url_from=data[0], page_index=data[1])
        except Exception, e:
            logging.debug("  mysql: find the oldest row on the {} failure, {}".format(self.collection_name, e))
        finally:
            xcnx.close()
            _connection.close()

        if not row:
            row = PageItem.get_empty_item(url_from)

        return row
