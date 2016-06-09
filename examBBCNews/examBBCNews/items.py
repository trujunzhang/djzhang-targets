# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy

class NewsItem(scrapy.Item):
    headline = scrapy.Field()
    intro = scrapy.Field()
    url = scrapy.Field()

class RelativeItem(scrapy.Item):
    relativeline = scrapy.Field()
    relativeInfo = scrapy.Field()
    reltive = scrapy.Field()