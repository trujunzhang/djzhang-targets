# -*- coding: utf-8 -*-
import scrapy
import urlparse

from scrapy.selector import Selector, HtmlXPathSelector
from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors import LinkExtractor

from cwdealsdirect.items import ProductItem, DealsdirectNavbar
from scrapy_webdriver.http import WebdriverRequest


class DealsdirectSpider(scrapy.Spider):
    name = "dealsdirect"

    allowed_domains = ["www.dealsdirect.com.au"]

    # category
    # Shop / Colourful Kitchen / Colourful Kitchen / Kitchen Gadgets
    start_urls = [
        # 'https://www.dealsdirect.com.au',

        'https://www.dealsdirect.com.au/default.aspx?cid=100'  # watch

        # 'https://www.dealsdirect.com.au/itemsList.aspx?cid=100&saleID=y8x1a4aMPEOMuAXlj9jAbA' # sub2

        # detail product
        # 'https://www.dealsdirect.com.au/product.aspx?cid=100&saleID=NBqYwiGstUKP4kwoWG2CFw&productID=dZhI9rTOcEielVwqHuBCUQ'
    ]

    def __init__(self, name=None, **kwargs):
        from cwdealsdirect.DBUtils import DBUtils
        self.dbutils = DBUtils(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection_name'])
        self.dbutils.open_spider()
        super(DealsdirectSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(DealsdirectSpider, cls).from_crawler(crawler,
                                                          args,
                                                          mongo_uri=crawler.settings.get('MONGODB_SERVER'),
                                                          mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
                                                          collection_name=(
                                                              "__history_" + crawler.settings.get(
                                                                  'MONGODB_COLLECTION_SALE_PRODUCTS'))
                                                          )

    # parse for sub1(category id)(cid)
    # def parse_category(self, response):
    def parse(self, response):
        _url = response.url

        yield WebdriverRequest(_url, callback=self.parse_category_full_page)

    def parse_category_full_page(self, response):
        count = 0
        _slick_slides = response.xpath('//*[@class="slick-track"]/div')
        for slide in _slick_slides:
            # if count >= 1:
            #     break
            sub2_link = response.xpath('//*[@class="slick-track"]/div/a/@href')[count].extract()
            count += 1

            yield WebdriverRequest(sub2_link, callback=self.parse_sub2)

        count = 0
        _sale_banners = response.xpath('//*[@role="saleBannersList"]/div/*[@role="saleBannerContainer"]')
        for banners in _sale_banners:
            # if count >= 1:
            #     break
            sub2_link = response.xpath('//*[@role="saleBannersList"]/div/*[@role="saleBannerContainer"]/a/@href')[count].extract()
            count += 1

            yield WebdriverRequest(sub2_link, callback=self.parse_sub2)



    def parse_sub2(self, response):
        # def parse(self, response):
        product_links = response.xpath('//*[@class="item-list-block"]/a/@href').extract()

        count = 0
        for product_link in product_links:
            # if count >= 1:
            #     break

            count += 1
            if not self.dbutils.check_history_exist(product_link):
                yield WebdriverRequest(product_link, callback=self.parse_product)

    def parse_product(self, response):
        # def parse(self, response):
        _url = response.url

        navs_list = response.xpath('//div[@class="base-content"]/div[@class="navigation clearfix"]/a/text()').extract()

        if len(navs_list) == 4:
            navItem = DealsdirectNavbar(
                sub1=navs_list[1],
                sub2=navs_list[2],
                sub3=navs_list[3],
            )
            yield navItem

            _brand_text = self.getValue(response,'//*[@class="product-info-block"]/div[@class="product-brand"]/text()',0)
            _product_name = self.getValue(response,'//*[@class="product-info-block"]/div[@class="product-name"]/text()',0)
            _new_price = self.getValue(response,'//*[@class="product-info-block"]/div[@class="product-price"]/div[@class="product-price-new"]/text()',0)
            _rrp_price = self.getValue(response,'//*[@class="product-info-block"]/div[@class="product-price"]/div[@class="product-rrp-label"]/span/text()',0)
            _rrp_text = self.getValue(response,'//*[@class="product-info-block"]/div[@class="rrp-text"]/text()',0)

            _thumbnail = self.getValue(response,'//div[@class="product-img"]/div/a/@href',0)

            productItem = ProductItem(
                url = _url,
                brand = _brand_text,
                title = _product_name,
                new_price = _new_price,
                label_price = _rrp_price,
                rrp_text = _rrp_text,
                thumbnail = _thumbnail,
                sub1=navs_list[1],
                sub2=navs_list[2],
                sub3=navs_list[3],
            )

            yield productItem

            self.dbutils.save_history(_url)


    def getValue(self, hxs, query, index, default=""):
        list = hxs.xpath(query)
        if len(list) > index:
            return list[index].extract()
        return default

