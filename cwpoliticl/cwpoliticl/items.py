# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class Politicl(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()
    updated_at = scrapy.Field()


    cluster = scrapy.Field()
    category = scrapy.Field()
    price = scrapy.Field()
    thumbnail = scrapy.Field()
    title = scrapy.Field()
    reviewsNum = scrapy.Field()
    datePublished = scrapy.Field()
    website = scrapy.Field()
    email = scrapy.Field()
    address = scrapy.Field()
