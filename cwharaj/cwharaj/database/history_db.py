import logging
from datetime import datetime

from cwharaj.database.base.mysql_db import MysqlDatabase
from cwharaj.items import HistoryItem
from cwharaj.utils.crawl_utils import CrawlUtils


class HistoryDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(HistoryDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_history(self, url, id_ads):
        item = HistoryItem(
            url=url,
            guid=CrawlUtils.get_guid(url),
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
            id=id_ads
        )

        self.update_for_history(id_ads, item)
        logging.debug("HarajHistory added to database!")

    def update_for_history(self, id_ads, item):
        sql = """ SELECT id FROM {}} WHERE guid = '{}'""".format(self.collection_name, item['guid'])
        _ads_id = self._get_row_id(sql, self.collection_name)
        if _ads_id == "":
            self.insert_for_history(item)

    def insert_for_history(self, item):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " INSERT INTO " + self.collection_name + " (url, guid, created_at, id) VALUES (%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (item['url'], item['guid'], item['created_at'], item['id']))
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
            logging.debug("  mysql: insert the history row {} failure, {}".format(item['id'], _excep))
        else:
            logging.debug("  mysql: insert {} into the {} successfully".format(item['id'], self.collection_name))
