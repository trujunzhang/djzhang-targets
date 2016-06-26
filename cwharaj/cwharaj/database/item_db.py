# coding=utf-8
import logging

from cwharaj.database.base.mysql_db import MysqlDatabase
from cwharaj.items import Section


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

    def save_comment(self, comment):
        sql = """ SELECT id FROM comments WHERE id_ads = '{}' and id_His_response = '{}' and text = '{}'""".format(
            comment['id_ads'], comment['id_His_response'], comment['text'])
        _comment_id = self._get_row_id(sql, "comments")
        if _comment_id:
            return _comment_id

        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()
        _comment_id = -1

        sql = """INSERT INTO comments (id_ads, id_His_response, text, Time_added_co) VALUES (%s,%s,%s,%s)"""

        try:
            # Execute the SQL command
            _cursor.execute(sql, (
                comment['id_ads'], comment['id_His_response'], comment['text'], comment['Time_added_co']
            ))
            # Commit your changes in the database
            _connection.commit()
            # get the "id" after INSERT into MySQL database
            _comment_id = _cursor.lastrowid
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            _connection.rollback()
        finally:
            _cursor.close()
            _connection.close()

        if _excep:
            logging.debug("  mysql: insert the comments row failure, {}".format(_excep))
        else:
            logging.debug("  mysql: insert the comments into the {} successfully".format(_comment_id))

        return _comment_id

    def save_city(self, city):
        sql = """ SELECT id FROM cities WHERE text = '{}'""".format(city['text'])
        _cities_id = self._get_row_id(sql, "cities")
        if _cities_id:
            return _cities_id

        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()
        _cities_id = -1

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
            logging.debug("  mysql: insert the cities row failure, {}".format(_excep))
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
        _members_id = -1

        sql = " INSERT INTO " + "members" + " (username, password, groupnumber, email, timeregister, member_code, documentingmobile, Documentingemail, phone, sendtime, active, now, Lastactivity, subscribe_1, subscribe_2, subscribe_3, The_pay_commission) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

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

    def update_member_phone(self, members_id, image_phone):
        sql = """ SELECT id FROM members WHERE id = '{}'""".format(members_id)
        _members_id = self._get_row_id(sql, "cities")
        if _members_id:
            self._update_contact_for_ads(members_id, image_phone)

    def save_opensooq_phone(self, opensooq_phone):
        sql = """ SELECT id FROM opensooq_phone WHERE phone = '{}'""".format(opensooq_phone['phone'])
        _opensooq_phone_id = self._get_row_id(sql, "opensooq_phone")
        if _opensooq_phone_id:
            return _opensooq_phone_id

        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        sql = """ INSERT INTO opensooq_phone(phone) VALUES ('{}')""".format(opensooq_phone['phone'])

        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Commit your changes in the database
            _connection.commit()
            # get the "id" after INSERT into MySQL database
            _opensooq_phone_id = _cursor.lastrowid
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            _connection.rollback()
        finally:
            _cursor.close()
            _connection.close()

        if _excep:
            logging.debug("  mysql: insert the opensooq_phone row failure, {}".format(_excep))
        else:
            logging.debug("  mysql: insert the opensooq_phone into the {} successfully".format(_opensooq_phone_id))

        return _opensooq_phone_id

    def save_section(self, section):
        item = self.get_section(section['name'])
        if item:
            return item

        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()
        _section_id = -1

        sql = " INSERT INTO " + "section" + " (name, type, Documentto, Contents, linkmodel) VALUES (%s,%s,%s,%s,%s)"

        try:
            # Execute the SQL command
            _cursor.execute(sql, (
                section['name'], section['type'], section['Documentto'], section['Contents'], section['linkmodel']
            ))
            # Commit your changes in the database
            _connection.commit()
            # get the "id" after INSERT into MySQL database
            _section_id = _cursor.lastrowid
        except Exception, e:
            _excep = e
            # Rollback in case there is any error
            _connection.rollback()
        finally:
            _cursor.close()
            _connection.close()

        section['id'] = _section_id

        return section

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
