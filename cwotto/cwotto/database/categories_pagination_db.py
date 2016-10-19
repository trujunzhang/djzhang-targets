from cwotto.database.base_db import BaseDatabase

import logging
from scrapy.exceptions import DropItem
from datetime import datetime

from cwotto.utils.crawl_utils import CrawlUtils
from cwotto.extensions import ParsePy


class CategoriesPaginationDatabase(BaseDatabase):
    def __init__(self):
        super(CategoriesPaginationDatabase, self).__init__()

    def get_validate_categories_urls(self):
        query = ParsePy.ParseQuery("Categories")
        categories = query.fetch()

    def get_last_page_number(self):
        category = ParsePy.ParseObject("Categories")

    def save_page_number(self, category, number):
        pass
