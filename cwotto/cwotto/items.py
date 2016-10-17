# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class Product(scrapy.Item):
    ID = scrapy.Field()
    post_type = scrapy.Field()
    post_parent = scrapy.Field()
    post_status = scrapy.Field()
    menu_order = scrapy.Field()

    featured_image = scrapy.Field()

    url = scrapy.Field()

    post_title = scrapy.Field()
    post_name = scrapy.Field()
    post_content = scrapy.Field()
    post_excerpt = scrapy.Field()

    sale_price = scrapy.Field()
    regular_price = scrapy.Field()
    price = scrapy.Field()

    product_gallery = scrapy.Field()

    color = scrapy.Field()
    sizes = scrapy.Field()

    reviewCount = scrapy.Field()
    reviews = scrapy.Field()
