# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class AliExpress(scrapy.Item):
    created_at = scrapy.Field()
    updated_at = scrapy.Field()

    url = scrapy.Field()
    guid = scrapy.Field()

    title = scrapy.Field()
    thumbnail = scrapy.Field()
    seller = scrapy.Field()
    price = scrapy.Field()
    original_price = scrapy.Field()
    shipping = scrapy.Field()
    ship_from = scrapy.Field()
    delivery_time = scrapy.Field()
    rate_num = scrapy.Field()
    total_orders = scrapy.Field()
