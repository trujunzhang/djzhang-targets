# -*- coding: utf-8 -*-

import scrapy

from cwpoliticl.scraped_websites import WebsiteTypes, websites_allowed_domains, \
    websites_parses, is_pagination


class IndianExpressDebugSpider(scrapy.Spider):
    url_from = WebsiteTypes.indianexpress
    name = "{}_debug".format(url_from.value)
    details_urls = [
        # Detail
        # no tags
        # 'http://indianexpress.com/article/opinion/columns/gulberg-society-massacre-ehsan-jafri-zakia-jafri-case-naroda-patiya-conspiracy-under-the-carpet-2877863/'
        # one tag
        'http://indianexpress.com/article/opinion/columns/prakash-javadekar-hrd-ministry-narendra-modi-cabinet-reshuffle-expansion-2900114/'
        # no immage
        # 'http://indianexpress.com/article/opinion/editorials/thomas-isaac-kerala-finance-minister-fat-tax-junk-food-2909962/'
    ]

    def __init__(self, name=None, **kwargs):
        self.allowed_domains = [websites_allowed_domains.get(self.url_from)]

        if is_pagination:
            self.start_urls = [WebsiteTypes.get_pagination_url(self.url_from)]
        else:
            self.start_urls = self.details_urls

        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.extensions.rpc.wordpress_xml_rpc_utils import WDXmlRPCUtils
        self.wd_rpc = WDXmlRPCUtils(kwargs['wd_host'], kwargs['wd_user'], kwargs['wd_passwd'])

        self._parser = websites_parses.get(self.url_from)

        super(IndianExpressDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(IndianExpressDebugSpider, cls).from_crawler(crawler,
                                                                 args,
                                                                 host=crawler.settings.get('SQL_HOST'),
                                                                 port=crawler.settings.get('SQL_PORT'),
                                                                 user=crawler.settings.get('SQL_USER'),
                                                                 passwd=crawler.settings.get('SQL_PASSWD'),
                                                                 db=crawler.settings.get('SQL_DB'),
                                                                 collection_name=crawler.settings.get(
                                                                     'SQL_COLLECTION_NAME'),
                                                                 wd_host=crawler.settings.get('WD_HOST'),
                                                                 wd_user=crawler.settings.get('WD_USER'),
                                                                 wd_passwd=crawler.settings.get('WD_PASSWD')
                                                                 )

    def parse(self, response):
        if is_pagination:
            self._parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
        else:
            item = self._parser.parse(response.url, response, self.wd_rpc, thumbnail_url='')
