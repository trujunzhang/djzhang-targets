import logging
from datetime import datetime

from cwharaj.database.base.dispatch_db import DispatchDatabase
from cwharaj.items import HistoryItem
from cwharaj.utils.crawl_utils import CrawlUtils


class HistoryDatabase(DispatchDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(HistoryDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def process_item(self, url, item=None, index=0, id=-1):
        item = HistoryItem(
            url=url,
            guid=CrawlUtils.get_guid(url),
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
            ID=id
        )

        self.update_for_history(id, item)
        logging.debug("HarajHistory added to database!")
