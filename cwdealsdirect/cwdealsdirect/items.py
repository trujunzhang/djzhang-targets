# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ProductItem(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    updated_at = scrapy.Field()

    brand = scrapy.Field()
    title = scrapy.Field()
    new_price = scrapy.Field()
    label_price = scrapy.Field()

    rrp_text = scrapy.Field()

    thumbnail = scrapy.Field()

    sub1 = scrapy.Field()
    sub2 = scrapy.Field()
    sub3 = scrapy.Field()


class DealsdirectNavbar(scrapy.Item):
    guid = scrapy.Field()
    updated_at = scrapy.Field()

    sub1 = scrapy.Field()
    sub2 = scrapy.Field()
    sub3 = scrapy.Field()



