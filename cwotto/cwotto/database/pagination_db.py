from cwotto.database.base_db import BaseDatabase

import logging
from scrapy.exceptions import DropItem
from datetime import datetime

from cwotto.utils.crawl_utils import CrawlUtils


class PaginationDatabase(BaseDatabase):
    def __init__(self):
        super(PaginationDatabase, self).__init__()

    def get_last_page_number(self):
        pass

    def save_page_number(self, category, number):
        pass
