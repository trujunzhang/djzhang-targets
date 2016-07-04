import logging

import MySQLdb

from cwharaj.database.base.base_db import BaseDatabase


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

        sql = " INSERT INTO " + self.collection_name + " (url, guid, created_at, id, url_from) VALUES (%s,%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (item['url'], item['guid'], item['created_at'], item['id'], item['url_from']))
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
                "  mysql: insert {} into the {} from the {} successfully".format(item['id'], self.collection_name,
                                                                                 item['url_from']))

    def insert_for_ads(self, item):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        _ads_id = -1

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
            _ads_id = _cursor.lastrowid
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            _connection.rollback()
        finally:
            _cursor.close()
            _connection.close()

        if _excep:
            logging.debug("  mysql: insert the ads row failure, {}".format(_excep))
        else:
            logging.debug("  mysql: insert the ads {} successfully".format(_ads_id))

        return _ads_id

    def _update_contact_for_ads(self, ads_id, image_phone):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " UPDATE ads SET ads_contact = %s WHERE id = %s"

        try:
            _cursor.execute("SET NAMES utf8mb4;")  # or utf8 or any other charset you want to handle
            _cursor.execute("SET CHARACTER SET utf8mb4;")  # same as above
            _cursor.execute("SET character_set_connection=utf8mb4;")  # same as above
            # Execute the SQL command
            _cursor.execute(sql, (
                image_phone, ads_id
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
            logging.debug("  mysql: insert the ads row failure, {}".format(_excep))
        else:
            logging.debug("  mysql: insert the ads {} successfully".format(ads_id))

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
