# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

from datetime import datetime

import scrapy


class CacheItem(scrapy.Item):
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()

    url = scrapy.Field()
    created_at = scrapy.Field()
    thumbnail_url = scrapy.Field()

    @classmethod
    def get_default(cls, url, url_from, thumbnail_url=''):
        return CacheItem(
            url_from=url_from,
            thumbnail_url=thumbnail_url,
            url=url,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' ')
        )


class HistoryItem(scrapy.Item):
    url = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_default(cls, url):
        return HistoryItem(
            url=url,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
        )


class PageItem(scrapy.Item):
    """
    When scraping the whole pages for a website,
    We imagine that the website have 1000 pages, scrape 10 pages per time from the newest to the oldest.

    page_index variable record the index of the pages currently. Next time page_index will be (page_index + 10)
    """
    url_from = scrapy.Field()
    # Record the current page index
    page_index = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_empty_item(cls, url_from):
        return PageItem(
            url_from=url_from,
            page_index=1,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
        )

    @classmethod
    def get_default(cls, url_from, page_index):
        return PageItem(
            url_from=url_from,
            page_index=page_index,
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
    def get_default(cls, url, url_from, title, image_src, thumbnail_url, content, tags, access_denied_cookie=None):
        if not image_src:
            image_src = thumbnail_url

        return WDPost(
            url=url,
            url_from=url_from,
            title=title,
            image_src=image_src,
            content=content,
            tags=tags,
            access_denied_cookie=access_denied_cookie
        )
