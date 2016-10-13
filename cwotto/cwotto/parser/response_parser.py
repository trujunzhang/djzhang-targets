from cwotto.items import Product
from cwotto.parser.base_parser import BaseParser

import urlparse
import time


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

    def parse_item(self, url, hxs):

        _title = self.extract_by_query(hxs, "//*[@class='prd_shortInfo__text']/h1/text()")
        _description = self.extract_by_query(hxs, "//*[@id='description']/text()")

        _reviewCount = self.extract_by_query(hxs, "//*[@itemprop='reviewCount']/@content")
        _price = self.extract_by_query(hxs, "//*[@itemprop='price']/@content")
        _oldPrice = 0
        _newPrice = 0

        tmp = hxs.xpath("//*[@class='prd_alternateImages js_prd_thumbViewPort']")

        _pictures = []

        _colors = []

        _reviews = []

        item = Product(
            title=_title,
            description=_description,

            price=_price,
            oldPrice=_oldPrice,
            newPrice=_newPrice,

            pictures=_pictures,

            color=_colors,

            reviewCount=_reviewCount,
            reviews=_reviews,
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
