from envparse import env

from cwjetbrains.items import PageItem
from cwjetbrains.spiders.dispatch.base_dispatch import BaseDispatch


class WholePagesStatus(object):
    wp_index = 0
    wp_item = None
    wp_items = []

    def __init__(self, dict, page_db, scraped_pages_count):
        for key in dict.keys():
            self.wp_items.append(WholePagesItem(page_db, key, dict[key], scraped_pages_count))

        self.wp_item = self._get_current_pages_item()
        super(WholePagesStatus, self).__init__()

    def _get_current_pages_item(self):
        if self.wp_index < len(self.wp_items):
            return self.wp_items[self.wp_index]

    def get_next_page_url(self):
        if self.wp_item:
            url = self.wp_item.next_page_url()
            if not url:
                url = self._get_next_item_page_url()
            return url

    def _get_next_item_page_url(self):
        # next a pages website
        self.wp_index += 1

        self.wp_item = self._get_current_pages_item()
        if self.wp_item:
            return self.wp_item.next_page_url()


class WholePagesItem(object):
    start_page_index = None
    end_page_index = None

    page_index = 0
    url_from = None
    page_url = None

    def __init__(self, page_db, url_from, page_url, scraped_pages_count):
        self.page_db = page_db
        self.url_from = url_from
        self.page_url = page_url

        self.start_page_index = page_db.get_page_index(self.url_from)
        self.end_page_index = self.start_page_index + scraped_pages_count

        self.page_index = self.start_page_index

        super(WholePagesItem, self).__init__()

    def next_page_url(self):
        """
        Get the next scraped page url.

        :return: For example http://www.dailyo.in/politics?page={}.format(123)
        """
        # Step 1: Save the page index to the page database
        self.page_db.save_page(PageItem.get_default(self.url_from, self.page_index))

        # Step 2: Generate the next page url
        next_index = self.page_index + 1
        if self.page_index < self.end_page_index:
            url = self.page_url.format(self.page_index)
            self.page_index = next_index
            return url

    def save_current_page(self):
        """
        Save the current page index to the page database.
        """
        self.page_db.save_page(PageItem.get_default(self.url_from, self.page_index))


class SpiderWholePageDispatch(BaseDispatch):
    def __init__(self, page_db):
        self.page_db = page_db

        from cwjetbrains.scraped_websites import scraped_whole_pages_pagination
        self.wp_status = WholePagesStatus(scraped_whole_pages_pagination, self.page_db, env.int('scraped_pages_count'))

        super(SpiderWholePageDispatch, self).__init__()

    def parse_from_pagination(self, url, hxs, cache_db, history_db):
        type = self.websites[url]
        parse = self.parses[type]

        parse.parse_paginate(url, hxs, cache_db, history_db)

    def get_next_page_url(self):
        pass
