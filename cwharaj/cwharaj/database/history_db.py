import logging
from datetime import datetime

from cwharaj.database.base.base_db import BaseDatabase
from cwharaj.items import HistoryItem
from cwharaj.utils.crawl_utils import CrawlUtils


class HistoryDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(HistoryDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None, index=0, id=-1):
        item = HistoryItem(
            url=url,
            guid=CrawlUtils.get_guid(url),
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
            ID=id
        )

        self.collection.update_one({'ID': id}, {'$set': dict(item)}, True)
        logging.debug("HarajHistory added to database!")
