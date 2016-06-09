# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy

class Itune(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()
    updated_at = scrapy.Field()

    name = scrapy.Field()
    thumbnail = scrapy.Field()
    appLastUpdated = scrapy.Field()
    developer = scrapy.Field()
    website = scrapy.Field()
    ofReviews = scrapy.Field()
    ofReviewsCurrent = scrapy.Field()
    starts = scrapy.Field()
    startsCurrent = scrapy.Field()
    version = scrapy.Field()
    # description = scrapy.Field()