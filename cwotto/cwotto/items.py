# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from cwotto.utils.slugify import slugify


class Product(scrapy.Item):
    product_id = scrapy.Field()

    post_type = scrapy.Field()
    post_parent = scrapy.Field()

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

    @classmethod
    def get_parent_product(cls, url, product_id, title, _uniqueHtmlDetails):
        return Product(
            product_id=product_id,

            post_type="product",
            post_parent=0,

            post_status='publish',
            menu_order=0,

            featured_image=[],
            product_gallery=[],

            url=url,

            post_title=title,
            post_name=slugify(title),
            post_content=_uniqueHtmlDetails,
            post_excerpt=_uniqueHtmlDetails,

            regular_price=0,
            price=0,
            oldPrice=0,

        )

    @classmethod
    def get_variable_product(cls, url, parent_product_id, product_id, title, regular_price, price, featured_image,
                             product_gallery):
        return Product(
            product_id=product_id,

            post_type="product_variation",
            post_parent=parent_product_id,

            post_status='publish',
            menu_order=0,

            featured_image=featured_image,
            product_gallery=product_gallery,

            url=url,

            post_title=title,
            post_name=slugify(title),
            post_content="",
            post_excerpt="",

            regular_price=0,
            price=0,
            oldPrice=0,

        )
