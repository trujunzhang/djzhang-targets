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
        self.client = None

    def connect(self):
        try:
            self.client = MySQLdb.Connection(
                host=self.host,
                user=self.user,
                passwd=self.passwd,
                db=self.db,
                port=self.port,
                charset="utf8mb4",
                use_unicode=True
            )
        except (AttributeError, MySQLdb.OperationalError), e:
            raise e

    def open_spider(self):
        self.connect()

    def close_spider(self):
        # disconnect from server
        self.client.close()

    def insert_for_cache(self, item):
        _excep = None
        cursor = self.client.cursor()

        sql = " INSERT INTO " + self.collection_name + " (url, guid, created_at, ID, url_from) VALUES (%s,%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            cursor.execute(sql, (item['url'], item['guid'], item['created_at'], item['ID'], item['url_from']))
            # Commit your changes in the database
            self.client.commit()
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            self.client.rollback()
        finally:
            cursor.close()

        if _excep:
            logging.debug("  mysql: insert the cache row failure, {}".format(_excep))
        else:
            logging.debug(
                "  mysql: insert {} into the {} from the {} successfully".format(item['ID'], self.collection_name,
                                                                                 item['url_from']))

    def insert_for_item(self, item):
        _excep = None
        cursor = self.client.cursor()

        sql = " INSERT INTO " + self.collection_name + " (url,guid,created_at,updated_at,ID,city,TIME,title,pictures,SUBJECT,contact,NUMBER,url_from,address,memberName,description,section) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

        try:
            cursor.execute("SET NAMES utf8mb4;")  # or utf8 or any other charset you want to handle
            cursor.execute("SET CHARACTER SET utf8mb4;")  # same as above
            cursor.execute("SET character_set_connection=utf8mb4;")  # same as above
            # Execute the SQL command
            cursor.execute(sql, (
                item['url'], item['guid'], item['created_at'], item['updated_at'], item['ID'],
                item['city'], item['time'], item['title'],
                item['pictures'],
                item['subject'], item['contact'],
                item['number'], item['url_from'], item['address'], item['memberName'], item['description'],
                item['section']
            ))
            # Commit your changes in the database
            self.client.commit()
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            self.client.rollback()
        finally:
            cursor.close()

        if _excep:
            logging.debug(
                "  mysql: insert the item row, id {}, from {}, failure, {}".format(_excep, item['ID'],
                                                                                   item['url_from']))
        else:
            logging.debug(
                "  mysql: insert {} into the {} from the {} successfully".format(item['ID'], self.collection_name,
                                                                                 item['url_from']))

    def insert_for_history(self, item):
        _excep = None
        cursor = self.client.cursor()

        sql = " INSERT INTO " + self.collection_name + " (url, guid, created_at, ID) VALUES (%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            cursor.execute(sql, (item['url'], item['guid'], item['created_at'], item['ID']))
            # Commit your changes in the database
            self.client.commit()
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            self.client.rollback()
        finally:
            cursor.close()

        if _excep:
            logging.debug("  mysql: insert the history row {} failure, {}".format(item['ID'], _excep))
        else:
            logging.debug("  mysql: insert {} into the {} successfully".format(item['ID'], self.collection_name))

    def update_for_history(self, id, item):
        if not self.check_exist_by_id(id):
            self.insert_for_history(item)

    def get_count(self, key, value):
        _count = 0
        cursor = self.client.cursor()

        sql = """ SELECT 1 FROM {} WHERE {} = '{}'""".format(self.collection_name, key, value)
        try:
            # Execute the SQL command
            cursor.execute(sql)
            _count = cursor.rowcount
        except Exception, e:
            logging.debug(
                "  mysql: get count for {} on the {} failure, {}".format(key, self.collection_name, e))
        finally:
            cursor.close()

        return _count

    def delete_row(self, _last, url_from):
        # 1. Parse the url and get the unique id.
        from cwharaj.items import WebsiteTypes
        _position = WebsiteTypes.get_id_index(url_from)

        from cwharaj.utils.crawl_utils import CrawlUtils
        _id = CrawlUtils.url_parse_id_from_page_url(_last, _position)
        logging.debug("  2. get the last url's id: {}".format(_id))

        # Query the deleted item count, must be equal to 1.
        count = self.get_count('ID', _id)
        logging.debug("  3. found the deleted item count: {} by ID".format(count))
        if count:

            cursor = self.client.cursor()
            sql = """ DELETE FROM {} WHERE {} = '{}'""".format(self.collection_name, 'ID', _id)
            try:
                # Execute the SQL command
                cursor.execute(sql)
                # Commit your changes in the database
                self.client.commit()
            except Exception, e:
                # Rollback in case there is any error
                self.client.rollback()
                logging.debug(
                    "  mysql: delete the last row on the {} failure, {}".format(self.collection_name, e))
            finally:
                cursor.close()

                logging.debug(
                    "  4. deleted cache row, id: {}, deleted count: {}, from the {}"
                        .format(_id, cursor.rowcount, url_from))

    def find_oldest_for_cache(self):
        _excep = None
        """Query the oldest cache item."""
        row = None
        cursor = self.client.cursor()

        found_count = 0

        sql = 'SELECT * FROM  {} ORDER BY {} ASC LIMIT 1'.format(self.collection_name, 'created_at')
        try:
            # Execute the SQL command
            cursor.execute(sql)
            # Get the row data
            data = cursor.fetchone()
            found_count = cursor.rowcount
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
            cursor.close()

        if _excep:
            logging.debug("  mysql: find the oldest row on the {} failure, {}".format(self.collection_name, _excep))
        else:
            logging.debug(
                "  mysql: find the count {} for the oldest row on the {}".format(found_count, self.collection_name))

        return row

    def check_exist_by_id(self, _id):
        ret = 0
        cursor = self.client.cursor()

        sql = """ SELECT 1 FROM {} WHERE ID = {}""".format(self.collection_name, _id)
        try:
            # Execute the SQL command
            cursor.execute(sql)
            # Get the count of rows
            ret = cursor.rowcount
        except Exception, e:
            logging.debug("  mysql: check {} exist on the {} failure, {}".format(_id, self.collection_name, e))
        finally:
            cursor.close()

        if ret:
            return True

        return False
