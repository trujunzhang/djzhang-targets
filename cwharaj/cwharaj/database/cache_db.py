import logging
from datetime import datetime
from cwharaj.database.base.dispatch_db import DispatchDatabase
from cwharaj.utils.crawl_utils import CrawlUtils


class CacheDatabase(DispatchDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(CacheDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def process_item(self, url, item=None, index=0, id=-1):
        logging.debug("  process cache item at position: {}".format(index - 1))

        guid = CrawlUtils.get_guid(url)

        item["url"] = url
        item["guid"] = guid
        item["created_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        if item["ID"] == "":
            _href = item["ID"]

        if self.check_exist_by_id(item["ID"]):
            logging.debug("  item exist {} from {} on the cache database".format(item["ID"], item["url_from"]))
        else:
            self.insert_for_cache(item)

    def get_oldest_row(self, _last, url_from):
        logging.debug("Get oldest row")
        logging.debug("  1. the last url: {}".format(_last))

        if _last:
            self.delete_row(_last, url_from)

        # Query the oldest cache item.
        return self.find_oldest_for_cache()
