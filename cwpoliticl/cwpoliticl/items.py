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


class WDPost(scrapy.Item):
    title = scrapy.Field()
    image = scrapy.Field()
    content = scrapy.Field()

    # tags list['Unicode']
    tags = scrapy.Field()

    @classmethod
    def get_default(self, title, image, content, tags):
        return HistoryItem(
            title=title,
            image=image,
            content=content,
            tags=tags
        )
