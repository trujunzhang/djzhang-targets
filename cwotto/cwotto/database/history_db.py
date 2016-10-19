from cwotto.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cwotto.extensions import ParsePy
from cwotto.utils.crawl_utils import CrawlUtils


class HistoryDatabase(BaseDatabase):
    def __init__(self):
        super(HistoryDatabase, self).__init__()

    def check_history_exist(self, href):
        history = ParsePy.ParseQuery("History").get("xxwXx9eOec")

    def save_history(self, item):
        history = ParsePy.ParseObject("History")
        history.save()
