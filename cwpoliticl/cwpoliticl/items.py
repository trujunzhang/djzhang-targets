# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from enum import Enum
import time
from datetime import datetime


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    dnaindia = "dnaindia"
    mstaml = "mstaml"
    harajsa = "harajsa"


class CacheItem(scrapy.Item):
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()

    url = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_default(self, url, url_from):
        return CacheItem(
            url_from=url_from,
            url=url,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' ')
        )


class HistoryItem(scrapy.Item):
    url = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_default(self, url):
        return HistoryItem(
            url=url,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
        )


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
