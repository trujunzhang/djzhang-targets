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


class Ad(scrapy.Item):
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
    number = scrapy.Field()  # number is mobile("الجوال")

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
    ID = scrapy.Field()
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()


class HistoryItem(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()

    # unique row id
    ID = scrapy.Field()


class section(scrapy.Item):
    # unique row id
    ID = scrapy.Field()

    name = scrapy.Field()
    type = scrapy.Field()
    Documentto = scrapy.Field()
    Contents = scrapy.Field()
    linkmodel = scrapy.Field()


class comment(scrapy.Item):
    # unique row id
    ID = scrapy.Field()

    id_ads = scrapy.Field()
    id_His_ = scrapy.Field()
    text = scrapy.Field()
    Time_added_co = scrapy.Field()


class city(scrapy.Item):
    # unique row id
    ID = scrapy.Field()

    text = scrapy.Field()


class comment(scrapy.Item):
    # unique row id
    ID = scrapy.Field()

    id_ads = scrapy.Field()
    id_His_response = scrapy.Field()
    text = scrapy.Field()
    Time_added_co = scrapy.Field()
