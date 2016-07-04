import logging
from datetime import datetime

from cwharaj.database.base.mysql_db import MysqlDatabase
from cwharaj.utils.crawl_utils import CrawlUtils


class CacheDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(CacheDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_cache(self, url, item=None, index=0):
        logging.debug("process the cache item at position: {}".format(index - 1))

        guid = CrawlUtils.get_guid(url)

        item["url"] = url
        item["guid"] = guid
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        if self.check_exist_by_id(item["id"]):
            logging.debug("  item exist {} from {} on the cache database".format(item["id"], item["url_from"]))
        else:
            self.insert_for_cache(item)

    def get_oldest_row(self, _last, url_from):
        logging.debug("Get oldest row")

        if _last:
            logging.debug("  1. delete the row by the last url: {}".format(_last))
            self.delete_row(_last, url_from)

        # Query the oldest cache item.
        return self.find_oldest_for_cache(url_from)

    def process_for(self):
        pass
