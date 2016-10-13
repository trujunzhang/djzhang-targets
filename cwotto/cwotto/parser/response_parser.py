from selenium.common.exceptions import NoSuchElementException
from cwotto.items import Product
from cwotto.parser.base_parser import BaseParser

import urlparse
import time

from cwotto.utils.selenium_utils import SeleniumUtils


class ResponseParse(BaseParser):
    def __init__(self):
        super(ResponseParse, self).__init__()

    def parse_paginate(self, url, hxs, cache_db):
        links = hxs.select('//a[@class="card-click-target"]/@href').extract()
        count = 0
        for link in links:
            appLink = urlparse.urljoin(url, link.strip())
            cache_db.process_item(url)
            count += 1

    def parse(self, url, hxs, index):
        pass

    def parse_item(self, hxs, _selector, index):

        thumbnail = hxs.find_element_by_xpath(
            _selector + "/div[@class='img-container left-block util-clearfix']/div/a/img").get_attribute(
            "src")

        _detail_selector = _selector + "/div[@class='right-block util-clearfix']/div/div[@class='detail']"

        title = hxs.find_element_by_xpath(_detail_selector + "/h3/a").get_attribute("title")
        seller = hxs.find_element_by_xpath(_detail_selector + "/div/span/a[2]").get_attribute("title")

        _info_price_selector = _selector + "/div[@class='right-block util-clearfix']/div/div[@class='info infoprice']"

        price = hxs.find_element_by_xpath(_info_price_selector + "/span/span[@itemprop='price']").text

        original_price = ""
        try:
            original_price = hxs.find_element_by_xpath(_info_price_selector + "/div[1]/del").text
        except NoSuchElementException:
            original_price = ""

        shipping = ""
        try:
            shipping = hxs.find_element_by_xpath(_info_price_selector + "/strong").text
        except NoSuchElementException:
            shipping = ""

        ship_from = ""
        try:
            ship_from = hxs.find_element_by_xpath(
                _info_price_selector + "/div[@class='delivery-wrap']/p[@class='from-foreign-country']").text
        except NoSuchElementException:
            ship_from = ""

        delivery_time = ""
        try:
            delivery_time = hxs.find_element_by_xpath(
                _info_price_selector + "/div[@class='delivery-wrap']/p[@class='delivery-time']").text
        except NoSuchElementException:
            delivery_time = ""

        rate_num = ""
        try:
            rate_num = hxs.find_element_by_xpath(_info_price_selector + "/div[@class='rate-history']/a").text
        except NoSuchElementException:
            rate_num = ""

        total_orders = ""
        try:
            total_orders = hxs.find_element_by_xpath(
                _info_price_selector + "/div[@class='rate-history']/span[@class='order-num']/a/em").text
        except NoSuchElementException:
            total_orders = ""

        detail_url = hxs.find_element_by_xpath(
            _selector + "/div[@class='right-block util-clearfix']/div/div[@class='detail']/h3/a").get_attribute("href")

        item = Product(
            url=detail_url,
            title=title,
            thumbnail=thumbnail,
            seller=seller,
            price=price,
            original_price=original_price,
            shipping=shipping,
            ship_from=ship_from,
            delivery_time=delivery_time,
            rate_num=rate_num,
            total_orders=total_orders
        )

        return item

    def submit_search(self, driver):
        driver.find_element_by_id("search-key").send_keys("apple watch")
        time.sleep(1)

        driver.find_element_by_class_name("search-button").click()
        time.sleep(1)

    def get_category_href(self, driver):
        categories = driver.find_elements_by_xpath("//*[@class='special-son-category']/ul/li/a")
        _href = SeleniumUtils.find_a_href(categories, "computer")
        return _href

    def get_items_from_pagenate(self, driver):
        items = []

        # _selector = "//ul[@id='hs-list-items']/li"
        # hs_list_items = driver.find_elements_by_xpath("//ul[@id='hs-list-items']/li")
        # count = 1
        # for item_div in hs_list_items:
        #     _item_selector = _selector + "[" + str(count) + "]"
        #     item = self.parse_item(driver, _item_selector, count)
        #     items.append(item)
        #
        #     count += 1

        _selector = "//div[@id='hs-below-list-items']/ul/li"
        hs_below_list_items = driver.find_elements_by_xpath("//div[@id='hs-below-list-items']/ul/li")
        count = 1
        for item_div in hs_below_list_items:
            # if count >= 10:
            #     break
            _item_selector = _selector + "[" + str(count) + "]"
            item = self.parse_item(driver, _item_selector, count)
            items.append(item)

            count += 1

        return items
