# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from cwotto.utils.slugify import slugify


class Product(scrapy.Item):
    sku = scrapy.Field()
    variable_id = scrapy.Field()

    is_parent = scrapy.Field()
    is_single = scrapy.Field()  # True means type is single product, False means type is variable product.
    default_variable = scrapy.Field()
    product_id = scrapy.Field()
    product_parent = scrapy.Field()
    variable_index = scrapy.Field()

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
            sku=product_id,
            variable_id=0,

            is_parent=True,
            is_single=False,  # False means type is variable product.
            default_variable=False,
            product_id=product_id,
            product_parent=0,
            variable_index=-1,

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
    def get_variable_product(cls, url, default_variation_id, variable_index,
                             product_id, variable_id,
                             title, regular_price, price,
                             featured_image, product_gallery,
                             attributes):
        return Product(
            sku="{}{}".format(product_id, variable_index),
            variable_id=variable_id,

            is_parent=False,
            is_single=False,  # False means type is variable product.
            default_variable=(variable_id == default_variation_id),
            product_id=product_id,
            product_parent=product_id,
            variable_index=variable_index,

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

    @classmethod
    def convert_to_parent(cls, variable_product, uniqueHtmlDetails):
        __product_id = variable_product['product_id']
        __title = variable_product['post_title']
        return Product(
            sku=__product_id,
            variable_id=0,

            is_parent=True,
            is_single=True,  # True means type is single product
            default_variable=False,
            product_id=__product_id,
            product_parent=0,
            variable_index=-1,

            post_status='publish',
            menu_order=0,

            featured_image=variable_product['featured_image'],
            product_gallery=variable_product['product_gallery'],

            url=variable_product['url'],

            post_title=__title,
            post_name=slugify(__title),
            post_content=uniqueHtmlDetails,
            post_excerpt=uniqueHtmlDetails,

            regular_price=variable_product['regular_price'],
            price=variable_product['price'],
            oldPrice=variable_product['oldPrice'],

            attributes=[],
            available_attributes=[]
        )
