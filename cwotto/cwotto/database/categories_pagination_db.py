from cwotto.database.base_db import BaseDatabase

import logging
from scrapy.exceptions import DropItem
from datetime import datetime

from cwotto.utils.crawl_utils import CrawlUtils
from cwotto.extensions import ParsePy


class CategoriesPaginationDatabase(BaseDatabase):
    def __init__(self):
        self.categories = self.__get_scraped_categories()
        self.step = 0
        self.pagination = 1
        super(CategoriesPaginationDatabase, self).__init__()

    def __get_scraped_categories(self):
        query = ParsePy.ParseQuery("Categories")
        categories = query.fetch()
        return categories

    def get_current_category_url(self):
        if self.categories:
            if self.step < len(self.categories):
                url = self.categories[self.step].url
                pagination_url = "{}/?p={}&ps=72".format(url, self.pagination)
                return pagination_url

        return None

    def get_current_total_pages(self):
        count = self.categories[self.step].totalNumber
        return count

    def save_page_number(self, scraped_count):
        count = self.categories[self.step].totalNumber
        number = count - scraped_count
        if number <= 0:
            self.pagination = 1
            self.step += 1
        else:
            self.pagination += 1
            self.categories[self.step].totalNumber = number
