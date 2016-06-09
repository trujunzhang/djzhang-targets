# -*- coding: utf-8 -*-
import scrapy

from random import Random

import scrapy
from scrapy.linkextractors.sgml import SgmlLinkExtractor
from scrapy.selector import Selector, HtmlXPathSelector
from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors import LinkExtractor
# from cwfuqs.items import PlayApp
import urlparse


class FuqSpider(scrapy.Spider):
    name = "fuq"
    allowed_domains = ["fuq.com"]
    start_urls = [
        # 'http://www.fuq.com/',
        # 'http://www.fuq.com/search/?q=Mom%7CMother&kwid=5645&c=1'
        'http://www.fuq.com/search/?q=Mom%7CMother&kwid=5645&c=1'
    ]

    # http: // www.fuq.com / search /?q = Mom % 7CMother & kwid = 5645 & c = 1 & p = 2

    # rules = (
    #     Rule(SgmlLinkExtractor(allow=(), restrict_xpaths=('//a[@class="button next"]',)), callback="parse_items",follow=True),
    # )




    def parse_items(self, response):
        hxs = HtmlXPathSelector(response)
        links = hxs.select('//div[@class="itemSub"]').extract()
        count = 0
        url = response.url
        pass
