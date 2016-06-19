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


class Ad(scrapy.Item):
    ads_title = scrapy.Field()
    ads_city = scrapy.Field()
    ads_tags_R = scrapy.Field()
    ads_tags_F = scrapy.Field()
    ads_tags_FF = scrapy.Field()
    ads_contact = scrapy.Field()
    ads_body = scrapy.Field()
    image_link = scrapy.Field()
    type_ads_other_final = scrapy.Field()
    un_model = scrapy.Field()
    status = scrapy.Field()
    fixing = scrapy.Field()
    Time_added = scrapy.Field()
    His_announcement = scrapy.Field()
    type_ads_or = scrapy.Field()
    close_ads = scrapy.Field()
    Last_updated_Ad = scrapy.Field()
    closecomment = scrapy.Field()
    fixed_home = scrapy.Field()
    fixed_tub = scrapy.Field()
    fixed_sec = scrapy.Field()
    fixed_sec2 = scrapy.Field()
    fixed_sec3 = scrapy.Field()
    timer_mazad = scrapy.Field()


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
