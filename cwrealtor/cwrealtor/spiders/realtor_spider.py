# -*- coding: utf-8 -*-
import scrapy

from scrapy.selector import Selector, HtmlXPathSelector
from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors import LinkExtractor

from cwrealtor.items import RealtorItem, RealtorCache
from scrapy_webdriver.http import WebdriverRequest

from scrapy.selector import HtmlXPathSelector
from scrapy.http import Request

from scrapy.spider import BaseSpider
from scrapy.http import FormRequest

from selenium import webdriver

from scrapy.spider import BaseSpider
from scrapy.http import FormRequest, Request
from selenium import webdriver
import time


class RealtorSpider(scrapy.Spider):
    name = "realtor"
    allowed_domains = ["realtor.com"]
    start_urls = [
        'https://www.realtor.ca/'

        # 'https://www.realtor.ca/Residential/Map.aspx#CultureId=1&ApplicationId=1&RecordsPerPage=9&MaximumResults=9&PropertySearchTypeId=1&TransactionTypeId=2&StoreyRange=0-0&BedRange=0-0&BathRange=0-0&LongitudeMin=-120.14916229248051&LongitudeMax=-71.67748260498051&LatitudeMin=55.138480047874566&LatitudeMax=68.9329940090839&SortOrder=A&SortBy=1&viewState=m&Longitude=-95.9133224487305&Latitude=62.8329086303711&ZoomLevel=5',

        # 'https://www.realtor.ca/Residential/Single-Family/16795656/104-Third-Street-Hudson-Ontario-P5T1J3'
    ]

    def __init__(self, name=None, **kwargs):
        from cwrealtor.Realtor import Realtor
        self.realtor = Realtor(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection_cache_name'])
        self.realtor.open_spider()
        from cwrealtor.DBUtils import DBUtils
        self.history_utils = DBUtils(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection__history_name'])
        self.history_utils.open_spider()
        self.driver = webdriver.Firefox()
        super(RealtorSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(RealtorSpider, cls).from_crawler(crawler,
                                                      args,
                                                      mongo_uri=crawler.settings.get('MONGODB_SERVER'),
                                                      mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
                                                      collection_cache_name=crawler.settings.get(
                                                          'MONGODB_COLLECTION_CACHE'),
                                                      collection__history_name=(
                                                          "__history_" + crawler.settings.get(
                                                              'MONGODB_COLLECTION'))
                                                      )

    def spider_closed(self, spider):
        self.driver.close()
        self.realtor.close_spider()
        self.history_utils.close_spider()

    # def parsexxx(self, response):
    def parse(self, response):
        # self.driver.get(response.url)
        # time.sleep(4)

        # total_count = int(self.driver.find_element_by_class_name('m_map_map_cnt_lst_hdr_count').text)
        total_count = 100  # test
        count = 0
        # while True:
        #
        #     _list_hrefs = self.driver.find_elements_by_xpath('//div[@id="resultPlaceholder"]/div/a')
        #     count += len(_list_hrefs)
        #     if count >= total_count:
        #         break
        #
        #     for _list in _list_hrefs:
        #         _detail_link = _list.get_attribute('href')
        #
        #         cache = RealtorCache(
        #             href=_detail_link
        #         )
        #         self.realtor.process_item(cache)
        #
        #     time.sleep(4)
        #     self.driver.find_element_by_xpath("//button[@id='nextPage']").click()
        #     time.sleep(8)

        _last = ""
        while True:
            _url = self.realtor.next(_last)
            _last = _url
            if _url:
                time.sleep(1)
                self.driver.get(_url)
                time.sleep(2)
                yield self.realtor.parse(self.driver, _url)
            else:
                break
