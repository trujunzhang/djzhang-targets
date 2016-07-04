import logging
from datetime import datetime

from cwharaj.database.base.mysql_db import MysqlDatabase
from cwharaj.items import HistoryItem
from cwharaj.utils.crawl_utils import CrawlUtils


class HistoryDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(HistoryDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_history(self, item):
        sql = """ SELECT ads_id FROM {} WHERE model_id = '{}'""".format(self.collection_name, item['model_id'])
        _ads_id = self._get_row_id(sql, self.collection_name)
        if _ads_id:
            logging.debug("HarajHistory already exist!")
        else:
            self._insert_for_history(item)
            logging.debug("HarajHistory added to database successfully!")

    def _insert_for_history(self, item):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " INSERT INTO " + self.collection_name + " (model_id,ads_id,url,created_at) VALUES (%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (item['model_id'], item['ads_id'], item['url'], item['created_at']))
            # Commit your changes in the database
            _connection.commit()
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            _connection.rollback()
        finally:
            _cursor.close()
            _connection.close()

        if _excep:
            logging.debug("  mysql: insert the history row {} failure, {}".format(item['ads_id'], _excep))
        else:
            logging.debug("  mysql: insert {} into the {} successfully".format(item['ads_id'], self.collection_name))

    def check_history_exist(self, model_id):
        """
        This method is so important!

        Checking wheather the row exist before insert to database.
        :param model_id:
        :return:
        """
        ret = 0
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = """ SELECT 1 FROM {} WHERE id = {}""".format(self.collection_name, _id)
        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Get the count of rows
            ret = _cursor.rowcount
        except Exception, e:
            logging.debug("  mysql: check {} exist on the {} failure, {}".format(_id, self.collection_name, e))
        finally:
            _cursor.close()
            _connection.close()

        if ret:
            return True

        return False
