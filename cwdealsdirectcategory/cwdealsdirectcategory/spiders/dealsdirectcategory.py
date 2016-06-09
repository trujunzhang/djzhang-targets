# -*- coding: utf-8 -*-
import scrapy

from scrapy.selector import Selector, HtmlXPathSelector
from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors import LinkExtractor
from cwdealsdirectcategory.items import DealsdirectcategoryItem
import urlparse


class DealsdirectcategorySpider(scrapy.Spider):
    name = "dealsdirectcategory"

    allowed_domains = ["www.dealsdirect.com.au"]

    # category
    # Shop / Colourful Kitchen / Colourful Kitchen / Kitchen Gadgets
    start_urls = (
        'https://www.dealsdirect.com.au',
    )

    def __init__(self, name=None, **kwargs):
        from cwdealsdirectcategory.DBUtils import DBUtils
        self.dbutils = DBUtils(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection_name'])
        self.dbutils.open_spider()
        super(DealsdirectcategorySpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(DealsdirectcategorySpider, cls).from_crawler(crawler,
                                                                  args,
                                                                  mongo_uri=crawler.settings.get('MONGODB_SERVER'),
                                                                  mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
                                                                  collection_name=(
                                                                      "__history_" + crawler.settings.get(
                                                                          'MONGODB_COLLECTION'))
                                                                  )

    def parse(self, response):
        hxs = HtmlXPathSelector(response)

        _selector = '//div[@role="saleCategories"]'

        links = hxs.select(_selector + '/a')
        count = 0
        for link in links:
            item = DealsdirectcategoryItem()

            _title = self.getValue(hxs, _selector + '/a/text()', count)
            item['title'] = _title

            _categoryLink = self.getValue(hxs, _selector + '/a/@href', count)
            item['href'] = _categoryLink
            _data_category_id = self.getValue(hxs, _selector + '/a/@data-category-id', count)
            item['data_category_id'] = _data_category_id
            _data_cid = self.getValue(hxs, _selector + '/a/@data-cid', count)
            item['data_cid'] = _data_cid

            count += 1

            yield item

    def getValue(self, hxs, query, index, default=""):
        list = hxs.xpath(query)
        if len(list) > index:
            value = list[index].extract()
            return value
        return default
