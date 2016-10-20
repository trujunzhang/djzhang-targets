from cwotto.database.base_db import BaseDatabase

import logging
from scrapy.exceptions import DropItem
from datetime import datetime

from cwotto.utils.crawl_utils import CrawlUtils
from cwotto.extensions import ParsePy


class CategoriesPaginationDatabase(BaseDatabase):
    def __init__(self):
        self.categories = self.__get_scraped_categories()
        super(CategoriesPaginationDatabase, self).__init__()

    def __get_scraped_categories(self):
        query = ParsePy.ParseQuery("Categories")
        categories = query.fetch()
        return categories

    def get_current_category(self):
        pagination_url = "https://www.otto.de/waesche-bademode/herrenwaesche/nachtwaesche/?p={}&ps=72".format(1)
        return 0

    def get_validate_categories_urls(self):
        query = ParsePy.ParseQuery("Categories")
        categories = query.fetch()

    def get_last_page_number(self):
        category = ParsePy.ParseObject("Categories")

    def save_page_number(self, category, number):
        pass
