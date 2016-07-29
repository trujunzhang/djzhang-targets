# -*- coding: utf-8 -*-

import logging
import scrapy
import time

from scrapy.xlib.pydispatch import dispatcher
from scrapy import signals


class FlockSpider(scrapy.Spider):
    name = "flock"
    allowed_domains = ["github.com"]
    start_urls = (
        'https://github.com/scrapy',
    )

    def __init__(self, name=None, **kwargs):
        # the dispatcher is now called in init
        dispatcher.connect(self.handle_spider_closed, signals.spider_closed)
        time.sleep(60 * 5)
        super(FlockSpider, self).__init__(name, **kwargs)

    def parse(self, response):
        x = 0
        time.sleep(60 * 5)

    def handle_spider_closed(self, spider, reason):  # added self
        logging.debug("Not found the caches currently, the schedulared task end!")
