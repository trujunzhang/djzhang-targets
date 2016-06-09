# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class RealtorItem(scrapy.Item):
    href = scrapy.Field()
    guid = scrapy.Field()
    updated_at = scrapy.Field()

    # define the fields for your item here like:
    images = scrapy.Field()
    address = scrapy.Field()
    price = scrapy.Field()
    listing_id = scrapy.Field()
    property_type = scrapy.Field()
    land_size = scrapy.Field()
    built_in= scrapy.Field()

    Info_name= scrapy.Field()
    Info_phone = scrapy.Field()
    Info_email = scrapy.Field()
    description = scrapy.Field()


class RealtorCache(scrapy.Item):
    href = scrapy.Field()
    guid = scrapy.Field()
    updated_at = scrapy.Field()


