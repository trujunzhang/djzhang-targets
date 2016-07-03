from cwemail.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cwemail.utils.crawl_utils import CrawlUtils


class CacheDatabase(BaseDatabase):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        super(CacheDatabase, self).__init__(mongo_uri, mongo_db, collection_name)

    def process_item(self, url, item=None):
        guid = CrawlUtils.get_guid(url)

        item = {
            'url': url,
            'guid': guid,
            'created_at': datetime.utcnow().replace(microsecond=0).isoformat(' '),
        }

        self.db[self.collection_name].update_one({'guid': guid}, {'$set': dict(item)}, True)
        logging.debug("EmailCache added to MongoDB database!")
