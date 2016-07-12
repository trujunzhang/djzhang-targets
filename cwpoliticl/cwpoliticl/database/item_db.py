# coding=utf-8
import logging

from cwpoliticl.database.base.mysql_db import MysqlDatabase
from cwpoliticl.items import Section


class ItemDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(ItemDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_ad(self, item):
        sql = """ SELECT id FROM ads WHERE ads_title = '{}'""".format(item['ads_title'])
        _ads_id = self._get_row_id(sql, "ads")
        if _ads_id == "":
            _ads_id = self.insert_for_ads(item)

        item['id_ads'] = _ads_id

        return _ads_id

    def update_ads_contact(self, ads_id, image_phone):
        exist = self.check_exist_by_id(ads_id)
        if exist:
            self._update_contact_for_ads(ads_id, image_phone)

    def save_member(self, member):
        sql = """ SELECT id FROM members WHERE username = '{}'""".format(member['username'])
        _members_id = self._get_row_id(sql, "members")
        if _members_id:
            return _members_id

        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()
        _members_id = -1

        sql = " INSERT INTO members (username, password, groupnumber, email, timeregister, member_code, documentingmobile, Documentingemail, phone, sendtime, active, now, Lastactivity, subscribe_1, subscribe_2, subscribe_3, The_pay_commission) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (
                member['username'], member['password'], member['groupnumber'], member['email'], member['timeregister'],
                member['member_code'], member['documentingmobile'], member['Documentingemail'], member['phone'],
                member['sendtime'], member['active'], member['now'], member['Lastactivity'], member['subscribe_1'],
                member['subscribe_2'], member['subscribe_3'], member['The_pay_commission']
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
            logging.debug("  mysql: insert the members row failure, {}".format(_excep))
        else:
            logging.debug("  mysql: insert the members into the {} successfully".format(_members_id))

        return _members_id

    def update_members_phone(self, members_id, image_phone):
        sql = """ SELECT id FROM members WHERE id = '{}'""".format(members_id)
        _members_id = self._get_row_id(sql, "members")
        if _members_id:
            self._update_phone_for_members(members_id, image_phone)

    def _update_phone_for_members(self, _members_id, image_phone):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = " UPDATE members SET phone = %s WHERE id = %s"

        try:
            _cursor.execute("SET NAMES utf8mb4;")  # or utf8 or any other charset you want to handle
            _cursor.execute("SET CHARACTER SET utf8mb4;")  # same as above
            _cursor.execute("SET character_set_connection=utf8mb4;")  # same as above
            # Execute the SQL command
            _cursor.execute(sql, (
                image_phone, _members_id
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
            logging.debug("  mysql: insert the members row failure, {}".format(_excep))
        else:
            logging.debug("  mysql: insert the members {} successfully".format(_members_id))
