# -*- coding: utf-8 -*-
import scrapy
from selenium import webdriver


class KaismhSpider(scrapy.Spider):
    name = "kaismh"
    allowed_domains = ["kaismh.wordpress.com"]
    start_urls = (
        'https://kaismh.wordpress.com/2016/04/29/extracting-data-from-websites-using-scrapy/',
    )

    def parse(self, response):
        browser = webdriver.PhantomJS('/usr/local/bin/phantomjs')
        browser.get(response.url)

        # And than you can keep working from here
        cart_style = browser.find_element_by_id('secondary').get_attribute('style')

        pass
