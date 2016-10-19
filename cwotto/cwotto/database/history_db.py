from cwotto.database.base_db import BaseDatabase

import logging
from datetime import datetime

from cwotto.extensions import ParsePy
from cwotto.utils.crawl_utils import CrawlUtils


class HistoryDatabase(BaseDatabase):
    def __init__(self):
        super(HistoryDatabase, self).__init__()

    def check_history_exist(self, href):
        """
        # href is like href="/p/ajc-kurzblazer-552791036/#variationId=552791094">
        :param href:
        :return:
        """
        product_id = CrawlUtils.get_product_id(href)

        query = ParsePy.ParseQuery("History")
        query = query.eq("product_id", product_id)
        list = query.fetch()

        return len(list) > 0

    def save_history(self, item):
        history = ParsePy.ParseObject("History")
        history.product_id = item['product_id']
        history.save()

    def get_title(self):
        ParsePy.APPLICATION_ID = "bAWPW8Ap8Sbk6prAu8hflEoDZ5uCvjTvY5nLpB7X"
        ParsePy.MASTER_KEY = "BxBCs6KP0rk6Q2sR4XW5CnsEWK4mj4vdIHsEw7nB"

        gameScore = ParsePy.ParseQuery("GameScore").get("LWzpWzHOfr")

        return gameScore.playerName
