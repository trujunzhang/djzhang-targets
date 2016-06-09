# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy

# https://www.upwork.com/jobs/~0136945584fcb57f5f
class UpworkItem(scrapy.Item):
    href = scrapy.Field()
    guid = scrapy.Field()
    updated_at = scrapy.Field()

    # define the fields for your item here like:
    proposals = scrapy.Field()
    Interviewing = scrapy.Field()
    Last_viewed = scrapy.Field()
    Hires = scrapy.Field()
    job_id = scrapy.Field()


