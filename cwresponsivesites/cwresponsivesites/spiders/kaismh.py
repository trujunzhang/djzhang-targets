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
        driver = webdriver.PhantomJS()
        driver.set_window_size(240, 480)
        driver.get(response.url)

        driver.save_screenshot('/tmp/screen.png')
        # And than you can keep working from here
        # cart_style = driver.find_element_by_id('secondary').get_attribute('style')

        driver.quit()

        pass
