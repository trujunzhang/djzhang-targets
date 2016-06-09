# -*- coding: utf-8 -*-
import scrapy

from selenium import webdriver
import time

from cwgithub.items import GithubItem


class GithubSpider(scrapy.Spider):
    name = "github"
    allowed_domains = ["github.com"]
    start_urls = [
        'https://github.com/login',
    ]

    def __init__(self):
        self.driver = webdriver.Firefox()

    def spider_closed(self, spider):
        self.driver.close()

    def parse(self, response):
        self.driver.get(response.url)
        time.sleep(4)

        username = self.driver.find_element_by_id("login_field")
        password = self.driver.find_element_by_name("password")
        username.send_keys("trujunzhang")
        password.send_keys("wanghao720")
        time.sleep(4)
        self.driver.find_element_by_xpath("//input[@name='commit']").click()
        time.sleep(4)

        yield scrapy.Request("https://github.com/stars", self.parse_stars)
        # return [FormRequest.from_response(response,
        #                                   formdata={'login': 'trujunzhang', 'password': 'wanghao'},
        #                                   callback=self.after_login)]

    def parse_stars(self, response):
        self.driver.get(response.url)
        time.sleep(2)

        _repo_list = self.driver.find_element_by_id('js-repo-list')
        _li_list = _repo_list.find_elements_by_tag_name('li')

        for list in _li_list:
            _h3_ele = list.find_element_by_class_name('repo-list-name')

            _title = _h3_ele.text
            _href = _h3_ele.find_element_by_tag_name('a').get_attribute('href')
            _description = list.find_element_by_class_name('repo-list-description').text

            item = GithubItem(
                title=_title,
                href=_href,
                description=_description
            )

            yield item
