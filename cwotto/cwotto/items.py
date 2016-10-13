# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class Product(scrapy.Item):
    post_id = scrapy.Field()
    post_type = scrapy.Field()
    post_parent = scrapy.Field()

    url = scrapy.Field()

    title = scrapy.Field()
    uniqueHtmlDetails = scrapy.Field()

    retailPrice = scrapy.Field()
    oldPrice = scrapy.Field()
    normPrice = scrapy.Field()

    pictures = scrapy.Field()

    color = scrapy.Field()
    sizes = scrapy.Field()

    reviewCount = scrapy.Field()
    reviews = scrapy.Field()
