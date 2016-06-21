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
        pass

    def save_member(self, city):
        pass

    def get_section(self, name):
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        row = None

        sql = 'SELECT id,Documentto,Contents FROM  section  WHERE name ={}'.format(name)

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
        _excep = None
        _connection = self.get_client()
        _cursor = _connection.cursor()

        _year_id = ""

        sql = 'SELECT id FROM  years  WHERE text ={}'.format(_year)

        try:
            # Execute the SQL command
            _cursor.execute(sql)
            # Get the row data
            data = _cursor.fetchone()
            found_count = _cursor.rowcount
            if data:
                _year_id = data[0]
        except Exception, e:
            _excep = e
        finally:
            _cursor.close()
            _connection.close()

        return _year_id
