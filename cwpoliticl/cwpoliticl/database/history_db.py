import logging

from cwpoliticl.database.base.mysql_db import MysqlDatabase


class HistoryDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(HistoryDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_history(self, item):
        sql = """ SELECT 1 FROM {} WHERE url = '{}'""".format(self.collection_name, item['url'])
        count = self._get_count(sql, self.collection_name)
        if count:
            logging.debug("PoliticljHistory already exist!")
        else:
            self._insert_for_history(item)
            logging.debug("PoliticlHistory added to database successfully!")

    def _insert_for_history(self, item):
        _connection = self.get_client()
        xcnx = _connection.cursor()

        sql = " INSERT INTO " + self.collection_name + " (url,created_at) VALUES (%s,%s)"

        try:
            # Execute the SQL command
            xcnx.execute(sql, (item['url'], item['created_at']))
            # Commit your changes in the database
            _connection.commit()
        except Exception, e:
            # Rollback in case there is any error
            _connection.rollback()
            logging.debug("  mysql: insert the history row {} failure, {}".format(item['ads_id'], e))
        finally:
            xcnx.close()
            _connection.close()

    def check_history_exist(self, href):
        """
        This method is so important!

        Checking wheather the row exist before insert to database.
        :param href:
        :return:
        """
        sql = "SELECT * FROM {} WHERE url = '{}'".format(self.collection_name, href)
        return self._check_exist_with_sql(sql)
