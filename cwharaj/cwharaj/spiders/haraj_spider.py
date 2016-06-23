# -*- coding: utf-8 -*-
import time

import scrapy

from cwharaj.items import WebsiteTypes


class HarajsSpider(scrapy.Spider):
    name = "haraj"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com',
        'https://haraj.com.sa',
    ]
    start_urls = [
        'https://sa.opensooq.com',
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self._opensooq_parser = OpensooqParse()

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._mstaml_Parse = MstamlParse()

        from cwharaj.parser.harajsa_parser import HarajSaParse
        self._harajsa_Parse = HarajSaParse()

        from cwharaj.utils.phone_number_set import PhoneNumberSet
        self.phone_dict = PhoneNumberSet()

        super(HarajsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsSpider, cls).from_crawler(crawler,
                                                     args,
                                                     host=crawler.settings.get('SQL_HOST'),
                                                     port=crawler.settings.get('SQL_PORT'),
                                                     user=crawler.settings.get('SQL_USER'),
                                                     passwd=crawler.settings.get('SQL_PASSWD'),
                                                     db=crawler.settings.get('SQL_DB'),
                                                     collection_name=crawler.settings.get('SQL_COLLECTION_NAME')
                                                     )

    # This is entry point
    def parse(self, response):
        _last = ""
        _url_from = ""

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)

    def get_row_from_cache(self, _last, url_from):
        while True:
            _row = self._cache_db.get_oldest_row(_last, url_from)
            if _row:
                return _row

            # Return 'None' when the cache table is empty,
            # So we set the _last to empty string.
            _last = ""

            time.sleep(4)

    # ====================================================================================
    # opensooq
    # ====================================================================================
    def parse_page_from_opensooq(self, response):
        phone_number_item = self._opensooq_parser.parse(response.url, response, self._item_db, self.phone_dict)

        _ajax_url = phone_number_item.get_ajax_url()
        if _ajax_url:
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
        else:  # No phone number found, fetch the oldest from the cache database.
            item = phone_number_item.scrapy_item
            if item:
                _id = item["ID"]
                item["number"] = ""
                yield item

                self.phone_dict.remove_row(_id)
                self._history_db.save_history(response.url, id=_id)

            _last = response.url
            _url_from = WebsiteTypes.opensooq.value

            # step 1: request the last row on the cache database
            _row = self.get_row_from_cache(_last, _url_from)

            if _row['url_from'] == WebsiteTypes.opensooq.value:
                self.phone_dict.add_row(_row['ID'], _row)
                yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)
            elif _row['url_from'] == WebsiteTypes.mstaml.value:
                yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
            elif _row['url_from'] == WebsiteTypes.harajsa.value:
                yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)

    def ajax_phone_number_for_opensooq(self, response):
        _phone_number_base64 = response.body

        item = self.phone_dict.get_item_from_ajax_url_and_remove_dict(response.url)
        if item:
            _id = item["ID"]
            item["number"] = _phone_number_base64
            yield item

            self._history_db.save_history(response.url, id=_id)

        # Specially, the last url is not an ajax url,
        # We must get the url from the item.
        _last = item["url"]
        _url_from = WebsiteTypes.opensooq.value

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)

    # ====================================================================================
    # mstaml
    # ====================================================================================
    def parse_page_from_mstaml(self, response):
        item = self._mstaml_Parse.parse(response.url, response, self._item_db)
        yield item

        self._history_db.save_history(url=response.url, id=item["id_ads"])

        _last = response.url
        _url_from = WebsiteTypes.mstaml.value

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)

    # ====================================================================================
    # harajsa
    # ====================================================================================
    def parse_page_from_harajsa(self, response):
        item = self._harajsa_Parse.parse(response.url, response, self._item_db)

        self._history_db.save_history(url=response.url, id=item["id_ads"])

        _last = response.url
        _url_from = WebsiteTypes.harajsa.value

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(_last, _url_from)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            self.phone_dict.add_row(_row['ID'], _row)
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)
