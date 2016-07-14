# -*- coding: utf-8 -*-

import scrapy


class IndianExpressDebugSpider(scrapy.Spider):
    name = "indianexpress_debug"
    allowed_domains = ["www.indianexpress.com"]
    start_urls = [
        # Pagination
        'http://indianexpress.com/opinion/',
        # Detail
        # no tags
        # 'http://indianexpress.com/article/opinion/columns/gulberg-society-massacre-ehsan-jafri-zakia-jafri-case-naroda-patiya-conspiracy-under-the-carpet-2877863/'
        # one tag
        # 'http://indianexpress.com/article/opinion/columns/prakash-javadekar-hrd-ministry-narendra-modi-cabinet-reshuffle-expansion-2900114/'
    ]

    # 'Ignoring response <403 http://www.dnaindia.com/analysis>: HTTP status code is not handled or not allowed'

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.extensions.rpc.wordpress_xml_rpc_utils import WDXmlRPCUtils
        self.wd_rpc = WDXmlRPCUtils(kwargs['wd_host'], kwargs['wd_user'], kwargs['wd_passwd'])

        from cwpoliticl.extensions.indianexpress_parser import IndianExpressParser
        self._indian_express_Parse = IndianExpressParser()

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
        self._indian_express_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # item = self._indian_express_Parse.parse(response.url, response, self.wd_rpc)
