# -*- coding: utf-8 -*-
import logging
from random import Random

import scrapy

from cwotto.database.cache_db import CacheDatabase
from cwotto.database.categories_pagination_db import CategoriesPaginationDatabase
from cwotto.database.history_db import HistoryDatabase
from cwotto.extensions import ParsePy
from cwotto.items import Product


class EasyJetSpider(scrapy.Spider):
    name = "easyjet"
    allowed_domains = ["easyjet.com"]

    start_urls = [
        'http://www.easyjet.com/es/vacaciones/mixedresultlist/?board_codes=GT06-AO,GT06-SC,GT06-BB,GT06-HB%20GT06-HBP,GT06-FB%20GT06-FBP,GT06-AI%20GT06-AIP%20GT06-AIU%20GT06-AIR&destinations=&departure_airports=MAD&min_recommendation=-1&price=-1&dd=2016-11-04&rd=2016-12-02&dur=7&erd=0&edd=0&per_page=10&sort=qualifier3ASC&page=0&category=3&rating=1&rooms_count=1&rooms',
    ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.easyjet_parser import EasyJetParse
        self._crawl_parser = EasyJetParse()

        super(EasyJetSpider, self).__init__(name, **kwargs)

    def parse(self, response):
        url = response.request.url

        item = self._crawl_parser.parse_item(url=url, hxs=response)

        yield item
