# -*- coding: utf-8 -*-
import time

import scrapy

from cwharaj.items import WebsiteTypes, Ad, OpensooqPhone, HistoryItem
from cwharaj.utils.crawl_utils import CrawlUtils


class HarajsSpider(scrapy.Spider):
    name = "haraj"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com',
        'https://haraj.com.sa',
    ]
    homepage_opensooq = 'https://sa.opensooq.com'
    homepage_mstaml = 'http://www.mstaml.com'
    hoomepage_harajsa = 'https://haraj.com.sa'

    start_urls = [
        "https://sa.opensooq.com/"
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
        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache("", "")

        if _row['url_from'] == WebsiteTypes.opensooq.value:
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

        if phone_number_item:
            self._history_db.save_history(HistoryItem.get_default(url=response.url, id_ads=phone_number_item.id_ads,
                                                                  url_from=WebsiteTypes.opensooq.value))

            _ajax_url = phone_number_item.get_ajax_url()
            if _ajax_url:
                yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
            else:  # No phone number found, fetch the page again.
                yield scrapy.Request(response.url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)

    def ajax_phone_number_for_opensooq(self, response):
        """
        When the page has phone number, the response is the ajax url,
        Otherwise the response is the original page.
        :param response:
        :return:
        """
        _last = response.url
        model_id = ""
        if 'get-phone-number' in response.url:  # the url is the ajax.
            _phone_number_base64 = response.body
            _opensooq_phone_id = self._item_db.save_opensooq_phone(OpensooqPhone.get_default(_phone_number_base64))

            phone_number_item = self.phone_dict.get_item_from_ajax_url(response.url)
            if phone_number_item:
                _His_announcement_id = phone_number_item._His_announcement_id
                id_ads = phone_number_item.id_ads
                self._item_db.update_members_phone(_His_announcement_id, Ad.get_opensooq_phone(_opensooq_phone_id))
                self._item_db.update_ads_contact(id_ads, Ad.get_opensooq_phone(_opensooq_phone_id))

                _last = phone_number_item.url
                model_id = phone_number_item.model_id
        else:  # the url is the original page.
            model_id = CrawlUtils.get_model_id_by_url_from(_last, WebsiteTypes.opensooq.value)

        # Finally, remove the item from the phone dict by model id.
        self.phone_dict.remove_row(model_id)

        # step 1: request the last row on the cache database
        # the response's url have two types.
        # one is the opensooq's page url,other is the ajax url.
        _row = self.get_row_from_cache(_last, WebsiteTypes.opensooq.value)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
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

        self._history_db.save_history(HistoryItem.get_default(url=response.url, id_ads=item["id_ads"],
                                                              url_from=WebsiteTypes.mstaml.value))

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(response.url, WebsiteTypes.mstaml.value)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
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

        self._history_db.save_history(HistoryItem.get_default(url=response.url, id_ads=item["id_ads"],
                                                              url_from=WebsiteTypes.harajsa.value))

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(response.url, WebsiteTypes.harajsa.value)

        if _row['url_from'] == WebsiteTypes.opensooq.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.mstaml.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_mstaml, dont_filter=True)
        elif _row['url_from'] == WebsiteTypes.harajsa.value:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_harajsa, dont_filter=True)
