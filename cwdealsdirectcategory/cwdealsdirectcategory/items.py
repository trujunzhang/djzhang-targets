# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DealsdirectcategoryItem(scrapy.Item):
    # define the fields for your item here like:
    guid = scrapy.Field()
    updatedAt = scrapy.Field()

    title = scrapy.Field()
    href = scrapy.Field()
    data_category_id = scrapy.Field()
    data_cid = scrapy.Field()

