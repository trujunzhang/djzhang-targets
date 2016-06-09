# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class Etsy(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()
    updated_at = scrapy.Field()


    title = scrapy.Field()
    currencyValue = scrapy.Field()
    reviews = scrapy.Field()
    favorites = scrapy.Field()
    description = scrapy.Field()
    images = scrapy.Field()

