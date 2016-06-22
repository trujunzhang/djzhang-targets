# coding=utf-8
import logging
from datetime import datetime

from scrapy.exceptions import DropItem

from cwharaj.database.base.dispatch_db import DispatchDatabase
from cwharaj.database.base.mysql_db import MysqlDatabase
from cwharaj.items import Section
from cwharaj.utils.crawl_utils import CrawlUtils


class ItemDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(ItemDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def process_item(self, url, item=None, index=0, id=-1):
        global data

        item["guid"] = CrawlUtils.get_guid(url)
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')
        item["updated_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        valid = True

        if valid:
            if self.check_exist_by_id(item["ID"]):
                valid = False
                raise DropItem("Duplicate item found: {0}!".format(data))

        if valid:
            self.insert_for_item(item)
            logging.debug("Ad added to database.")

    def save_city(self, city):
        sql = """ SELECT id FROM cities WHERE text = '{}'""".format(city['text'])
        _cities_id = self._get_row_id(sql, "cities")
        if _cities_id:
            return _cities_id

        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = """INSERT INTO cities (text) VALUES ('{}')""".format(city['text'])

        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Commit your changes in the database
            _connection.commit()
            # get the "id" after INSERT into MySQL database
            _cities_id = _cursor.lastrowid
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            _connection.rollback()
        finally:
            _cursor.close()
            _connection.close()

        if _excep:
            _cities_id = -1
            logging.debug("  mysql: insert the cities row {} failure, {}".format(_cities_id, _excep))
        else:
            logging.debug("  mysql: insert the cities into the {} successfully".format(_cities_id))

        return _cities_id

    def save_member(self, member):
        sql = """ SELECT id FROM members WHERE username = '{}'""".format(member['username'])
        _members_id = self._get_row_id(sql, "cities")
        if _members_id:
            return _members_id

        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " INSERT INTO " + "members" + " (username, password, groupnumber, email, timeregister, member_code, documentingmobile, Documentingemail, phone, sendtime, active, now, Lastactivity, subscribe_1, subscribe_2, subscribe_3, The_pay_commission) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (
                member['username'], member['password'], member['groupnumber'], member['email'],
                member['timeregister'], member['member_code'], member['documentingmobile'], member['Documentingemail'],
                member['phone'], member['active'], member['now'], member['Lastactivity'],
                member['subscribe_1'], member['sendtime'], member['subscribe_2'], member['subscribe_3'],
                member['The_pay_commission']
            ))
            # Commit your changes in the database
            _connection.commit()
            # get the "id" after INSERT into MySQL database
            _members_id = _cursor.lastrowid
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            _connection.rollback()
        finally:
            _cursor.close()
            _connection.close()

        if _excep:
            _members_id = -1
            logging.debug("  mysql: insert the cities row {} failure, {}".format(_members_id, _excep))
        else:
            logging.debug("  mysql: insert the cities into the {} successfully".format(_members_id))

        return _members_id

    def get_section(self, name):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        row = None

        sql = "SELECT id,Documentto,Contents FROM  section  WHERE name ='{}'".format(name)

        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Get the row data
            data = _cursor.fetchone()
            found_count = _cursor.rowcount
            if data:
                row = Section(
                    id=data[0],
                    name='',
                    type='',
                    Documentto=data[1],
                    Contents=data[2],
                    linkmodel='',
                )
        except Exception, e:
            _excep = e
        finally:
            _cursor.close()
            _connection.close()

        return row

    def get_year_id(self, _year):
        sql = 'SELECT id FROM  years  WHERE text ={}'.format(_year)
        _years_id = self._get_row_id(sql, "years")
        return _years_id
