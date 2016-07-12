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

    @classmethod
    def get_id_index(self, _url_from):
        if _url_from == WebsiteTypes.opensooq.value:
            return 3
        elif _url_from == WebsiteTypes.mstaml.value:
            return 1
        elif _url_from == WebsiteTypes.harajsa.value:
            return 1

        return -1

    opensooq = "opensooq"
    mstaml = "mstaml"
    harajsa = "harajsa"

class CacheItem(scrapy.Item):
    model_id = scrapy.Field()
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()

    url = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_default(self, model_id, url, url_from):
        return CacheItem(
            model_id=model_id,
            url_from=url_from,
            url=url,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' ')
        )

class HistoryItem(scrapy.Item):
    # the same as ads(table).id_ads
    ads_id = scrapy.Field()
    model_id = scrapy.Field()

    url = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_default(self, url, id_ads, url_from):
        model_id = CrawlUtils.get_model_id_by_url_from(url, url_from)
        return HistoryItem(
            ads_id=id_ads,
            model_id=model_id,
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
