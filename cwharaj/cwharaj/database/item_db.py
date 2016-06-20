import logging
from datetime import datetime

from scrapy.exceptions import DropItem

from cwharaj.database.base.dispatch_db import DispatchDatabase
from cwharaj.database.base.mysql_db import MysqlDatabase
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

    def save_city(self,city):
        pass


    def save_member(self, city):
        pass
