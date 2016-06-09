# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class LinkedEmailApp(scrapy.Item):
    # guid = scrapy.Field()
    updatedAt = scrapy.Field()

    url = scrapy.Field()

    full_name = scrapy.Field()
    first_name = scrapy.Field()
    last_name = scrapy.Field()
    headline_title = scrapy.Field()
    locality = scrapy.Field()
    industry = scrapy.Field()
    # current_roles = scrapy.Field()
    # education_institutions = scrapy.Field()

    email = scrapy.Field()

