import MySQLdb
from cwharaj.database.base.base_db import BaseDatabase
import logging

from cwharaj.items import CacheItem


class MysqlDatabase(BaseDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(MysqlDatabase, self).__init__(host, port, user, passwd, db, collection_name)
        self.host = host
        self.port = port
        self.user = user
        self.passwd = passwd
        self.db = db
        self.collection_name = collection_name

    def get_client(self):
        try:
            _connection = MySQLdb.Connection(
                host=self.host,
                user=self.user,
                passwd=self.passwd,
                db=self.db,
                port=self.port,
                charset="utf8mb4",
                use_unicode=True
            )
            return _connection
        except (AttributeError, MySQLdb.OperationalError), e:
            raise e

    def open_spider(self):
        pass

    def close_spider(self):
        pass

    def insert_for_cache(self, item):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " INSERT INTO " + self.collection_name + " (url, guid, created_at, ID, url_from) VALUES (%s,%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (item['url'], item['guid'], item['created_at'], item['ID'], item['url_from']))
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
            logging.debug("  mysql: insert the cache row failure, {}".format(_excep))
        else:
            logging.debug(
                "  mysql: insert {} into the {} from the {} successfully".format(item['ID'], self.collection_name,
                                                                                 item['url_from']))

    def insert_for_item(self, item):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " INSERT INTO ads (ads_title, ads_city, ads_tags_R, ads_tags_F, ads_tags_FF, ads_contact, ads_body, image_link, type_ads_other_final, un_model, status, fixing, Time_added, His_announcement, type_ads_or, close_ads, Last_updated_Ad, closecomment, fixed_home, fixed_tub, fixed_sec, fixed_sec2, fixed_sec3, timer_mazad) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

        try:
            _cursor.execute("SET NAMES utf8mb4;")  # or utf8 or any other charset you want to handle
            _cursor.execute("SET CHARACTER SET utf8mb4;")  # same as above
            _cursor.execute("SET character_set_connection=utf8mb4;")  # same as above
            # Execute the SQL command
            _cursor.execute(sql, (
                item['ads_title'], item['ads_city'], item['ads_tags_R'], item['ads_tags_F'], item['ads_tags_FF'],
                item['ads_contact'], item['ads_body'], item['image_link'], item['type_ads_other_final'],
                item['un_model'], item['status'], item['fixing'], item['Time_added'], item['His_announcement'],
                item['type_ads_or'], item['close_ads'], item['Last_updated_Ad'], item['closecomment'],
                item['fixed_home'], item['fixed_tub'], item['fixed_sec'], item['fixed_sec2'], item['fixed_sec3'],
                item['timer_mazad']
            ))
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
            logging.debug(
                "  mysql: insert the item row, id {}, from {}, failure, {}".format(_excep, item['ID'],
                                                                                   item['url_from']))
        else:
            logging.debug(
                "  mysql: insert {} into the ads from the {} successfully".format(item['ID'], item['url_from']))

    def insert_for_history(self, item):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " INSERT INTO " + self.collection_name + " (url, guid, created_at, ID) VALUES (%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (item['url'], item['guid'], item['created_at'], item['ID']))
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
            logging.debug("  mysql: insert the history row {} failure, {}".format(item['ID'], _excep))
        else:
            logging.debug("  mysql: insert {} into the {} successfully".format(item['ID'], self.collection_name))

    def update_for_history(self, id, item):
        if not self.check_exist_by_id(id):
            self.insert_for_history(item)

    def _get_row_id(self, sql, table_name):
        _connection = self.get_client()
        _cursor = _connection.cursor()

        _row_id = ""

        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Get the row data
            data = _cursor.fetchone()
            found_count = _cursor.rowcount
            if data:
                _row_id = data[0]
        except Exception, e:
            logging.debug("  mysql: get id on the {} failure, {}".format(table_name, e))
        finally:
            _cursor.close()
            _connection.close()

        return _row_id

    def _get_count(self, sql, table_name):
        _count = 0
        _connection = self.get_client()
        _cursor = _connection.cursor()

        try:
            # Execute the SQL command
            _cursor.execute(sql)
            _count = _cursor.rowcount
        except Exception, e:
            logging.debug("  mysql: get count on the {} failure, {}".format(table_name, e))
        finally:
            _cursor.close()
            _connection.close()

        return _count

    def delete_row(self, _last, url_from):
        # 1. Parse the url and get the unique id.
        from cwharaj.items import WebsiteTypes
        _position = WebsiteTypes.get_id_index(url_from)

        from cwharaj.utils.crawl_utils import CrawlUtils
        _id = CrawlUtils.url_parse_id_from_page_url(_last, _position)
        logging.debug("  2. get the last url's id: {}".format(_id))

        # Query the deleted item count, must be equal to 1.
        sql = """ SELECT 1 FROM {} WHERE ID = '{}'""".format(self.collection_name, _id)
        count = self._get_count(sql, self.collection_name)
        logging.debug("  3. found the deleted item count: {} by ID".format(count))
        if count:

            _connection = self.get_client()
            _cursor = _connection.cursor()
            sql = """ DELETE FROM {} WHERE {} = '{}'""".format(self.collection_name, 'ID', _id)
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

    def get_cache_total_count(self):
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
                "  mysql: get count for {} on the {} failure, {}".format(key, self.collection_name, e))
        finally:
            _cursor.close()
            _connection.close()

        return _count

    def find_oldest_for_cache(self):
        total_count = self.get_cache_total_count()

        logging.debug(
            "  mysql: find the total count {} on the {}".format(total_count, self.collection_name))

        _excep = None
        """Query the oldest cache item."""
        row = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        found_count = 0

        sql = 'SELECT * FROM  {} ORDER BY {} ASC LIMIT 1'.format(self.collection_name, 'created_at')
        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Get the row data
            data = _cursor.fetchone()
            found_count = _cursor.rowcount
            if data:
                row = CacheItem(
                    guid=data[0],
                    ID=data[1],
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

    def check_exist_by_id(self, _id):
        """
        This method is so important!

        Checking wheather the row exist before insert to database.
        :param _id:
        :return:
        """
        ret = 0
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = """ SELECT 1 FROM {} WHERE ID = {}""".format(self.collection_name, _id)
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
