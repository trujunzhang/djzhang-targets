# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from cwotto.utils.slugify import slugify


class Product(scrapy.Item):
    product_id = scrapy.Field()
    variable_id = scrapy.Field()

    product_type = scrapy.Field()
    product_parent = scrapy.Field()

    post_status = scrapy.Field()
    menu_order = scrapy.Field()

    featured_image = scrapy.Field()
    product_gallery = scrapy.Field()

    url = scrapy.Field()

    post_title = scrapy.Field()
    post_name = scrapy.Field()
    post_content = scrapy.Field()
    post_excerpt = scrapy.Field()

    regular_price = scrapy.Field()
    price = scrapy.Field()
    oldPrice = scrapy.Field()

    attributes = scrapy.Field()
    available_attributes = scrapy.Field()

    @classmethod
    def get_parent_product(cls, url, product_id, title, uniqueHtmlDetails, available_attributes):
        return Product(
            product_id=product_id,

            product_type="product",
            product_parent=0,

            post_status='publish',
            menu_order=0,

            featured_image=[],
            product_gallery=[],

            url=url,

            post_title=title,
            post_name=slugify(title),
            post_content=uniqueHtmlDetails,
            post_excerpt=uniqueHtmlDetails,

            regular_price=0,
            price=0,
            oldPrice=0,

            attributes=[],
            available_attributes=available_attributes
        )

    @classmethod
    def get_variable_product(cls, url, product_id, variable_id, title,
                             regular_price, price,
                             featured_image, product_gallery,
                             attributes):
        return Product(
            product_id=product_id,
            variable_id=variable_id,

            product_type="product_variation",
            product_parent=product_id,

            post_status='publish',
            menu_order=0,

            featured_image=featured_image,
            product_gallery=product_gallery,

            url=url,

            post_title=title,
            post_name=slugify(title),
            post_content="",
            post_excerpt="",

            regular_price=regular_price,
            price=price,
            oldPrice=0,

            attributes=attributes,
            available_attributes=[]
        )
