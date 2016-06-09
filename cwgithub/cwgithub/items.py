# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class GithubItem(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    updated_at = scrapy.Field()

    # define the fields for your item here like:
    title = scrapy.Field()
    href = scrapy.Field()
    description = scrapy.Field()


