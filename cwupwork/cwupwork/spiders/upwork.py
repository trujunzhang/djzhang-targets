# -*- coding: utf-8 -*-
import scrapy

from cwupwork.jobs import jobs
from cwupwork.upwork import upwork

import scrapy

from scrapy.selector import HtmlXPathSelector
from scrapy.http import Request

from scrapy.spider import BaseSpider
from scrapy.http import FormRequest

from selenium import webdriver

from scrapy.spider import BaseSpider
from scrapy.http import FormRequest, Request
from selenium import webdriver
import time


class UpworkSpider(scrapy.Spider):
    name = "upwork"
    allowed_domains = ["upwork.com"]
    start_urls = [
        'https://www.upwork.com/login'

        # 'http://www.upwork.com/',
        # 'https://www.upwork.com/jobs/~0136945584fcb57f5f'

        # debug
        # 'https://www.upwork.com/job/Lead-Generation-Find-Contacts-names-emails_~01f662805f9c7f6df3/'
    ]

    def __init__(self, name=None, **kwargs):
        from cwupwork.DBUtils import DBUtils
        self.jobs = jobs(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection_name'])
        self.jobs.open_spider()
        self.jobs.readyParse()
        self.driver = webdriver.Firefox()
        super(UpworkSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(UpworkSpider, cls).from_crawler(crawler,
                                                     args,
                                                     mongo_uri=crawler.settings.get('MONGODB_SERVER'),
                                                     mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
                                                     collection_name=crawler.settings.get('MONGODB_COLLECTION_JOBS')
                                                     )

    def set_crawler(self, crawler):
        super(UpworkSpider, self).set_crawler(crawler)

    @staticmethod
    def close(spider, reason):
        return super(UpworkSpider, spider).close(spider, reason)

    def spider_closed(self, spider):
        self.driver.close()

    # log in
    def parse(self, response):
        self.driver.get(response.url)
        time.sleep(4)

        username = self.driver.find_element_by_id("login_username")
        password = self.driver.find_element_by_id("login_password")
        username.send_keys("trujunzhang@gmail.com")
        password.send_keys("wanghao@I720")
        time.sleep(4)
        self.driver.find_element_by_xpath("//button[@name='commit']").click()
        time.sleep(4)

        _url = self.jobs.next()
        if _url:
            yield scrapy.Request(_url, self.parse_job)

    # def parse(self, response):
    def parse_job(self, response):
        _upwork = upwork(response.url)

        count = 1
        _panel_selector = '//*[@class="air-card-group"]/div[2]/div[@class="row"]/div'
        info_panels = response.xpath(_panel_selector + '/p').extract()
        for panel in info_panels:
            if count != 1:  # Client Activity on this Job
                _type_span = response.xpath(_panel_selector + '/p[' + str(count) + ']/span/text()').extract()
                _value_span = response.xpath(_panel_selector + '/p[' + str(count) + ']/text()').extract()

                _upwork.parse(_type_span, _value_span)
            count += 1

        yield _upwork.getItem()

        _url = self.jobs.next()
        if _url:
            yield scrapy.Request(_url, self.parse_job)
