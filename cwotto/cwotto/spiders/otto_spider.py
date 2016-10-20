# -*- coding: utf-8 -*-
import logging
from random import Random

import scrapy

from cwotto.database.categories_pagination_db import CategoriesPaginationDatabase
from cwotto.extensions import ParsePy
from cwotto.items import Product


class OttoSpider(scrapy.Spider):
    name = "otto"
    allowed_domains = ["oto.com"]

    # start_urls = [
    #     # Pagination
    #     'https://www.otto.de/damenmode/kategorien/blazer/kurzblazer/',
    #     #  Detail
    #     # 'https://www.otto.de/p/bruno-banani-blazer-im-uniform-look-512770595#variationId=512770596',
    #     # 'https://www.otto.de/p/sit-sideboard-corsica-breite-150-cm-562203065#variationId=562204027',
    #     # "https://www.otto.de/p/melrose-blazer-509995713/#variationId=509998431"
    # ]

    def __init__(self, name=None, **kwargs):
        from cwotto.parser.otto_parser import OttoParse
        self._crawl_parser = OttoParse()

        Parse_Application_name = "otto-products"
        ParsePy.APPLICATION_ID = "bAWPW8Ap8Sbk6prAu8hflEoDZ5uCvjTvY5nLpB7X"
        ParsePy.MASTER_KEY = "BxBCs6KP0rk6Q2sR4XW5CnsEWK4mj4vdIHsEw7nB"

        self.categories_db = CategoriesPaginationDatabase()

        link = self.categories_db.get_current_category_url()
        if link:
            self.start_urls = [link]
        else:
            self.start_urls = []
            logging.debug("Not found the caches currently, the schedulared task end!")

        super(OttoSpider, self).__init__(name, **kwargs)

    def parse(self, response):
        url = response.request.url

        page_number = self.categories_db.get_current_total_pages()
        scraped_count = self._crawl_parser.parse_paginate(url, response, page_number)
        self.categories_db.save_page_number(scraped_count)

        link = self.categories_db.get_current_category_url()
        if link:
            yield scrapy.Request(link, self.parse, dont_filter=True)

    def parse_item(self, response):
        url = response.request.url

        from cwotto.utils.crawl_utils import CrawlUtils
        variation_id = CrawlUtils.get_variation_id(url)
        if variation_id:

            product = self._crawl_parser.parse_item(url, response, variation_id)

            if product:
                parent = product["parent"]
                if parent:
                    yield parent

                    children = product["children"]
                    for __child in children:
                        yield __child
