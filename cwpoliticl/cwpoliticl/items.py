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
    indianexpress = "indianexpress"
    theviewspaper = "theviewspaper"


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
    url = scrapy.Field()
    title = scrapy.Field()
    image_src = scrapy.Field()
    content = scrapy.Field()

    url_from = scrapy.Field()

    access_denied_cookie = scrapy.Field()

    # tags list['Unicode']
    tags = scrapy.Field()

    @classmethod
    def get_default(self, url, url_from, title, image_src, content, tags, access_denied_cookie=None):
        return HistoryItem(
            url=url,
            url_from=url_from,
            title=title,
            image_src=image_src,
            content=content,
            tags=tags,
            access_denied_cookie=access_denied_cookie
        )
