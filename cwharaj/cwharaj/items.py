# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from enum import Enum


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    opensooq = "opensooq"
    mstaml = "mstaml"
    haraj = "haraj"


class Haraj(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()
    updated_at = scrapy.Field()

    ID = scrapy.Field()
    city = scrapy.Field()
    time = scrapy.Field()
    title = scrapy.Field()
    pictures = scrapy.Field()
    subject = scrapy.Field()
    contact = scrapy.Field()
    number = scrapy.Field()

    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()

    address = scrapy.Field()
    memberName = scrapy.Field()
    description = scrapy.Field()
    section = scrapy.Field()


class CacheItem(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()

    # unique row id
    model_id = scrapy.Field()
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()
