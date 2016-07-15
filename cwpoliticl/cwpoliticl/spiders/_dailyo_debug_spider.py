# -*- coding: utf-8 -*-

import scrapy

from cwpoliticl.scraped_websites import websites_allowed_domains, WebsiteTypes, \
    websites_parses


class DailyoDebugSpider(scrapy.Spider):
    url_from = WebsiteTypes.dailyo
    name = "{}_debug".format(url_from.value)
    start_urls = [
        # Pagination
        # WebsiteTypes.get_pagination_url(url_from),
        # Detail
        'http://www.dailyo.in/politics/sheila-dikshit-up-assembly-polls-congress-priyanka-gandhi-salman-khurshid-chief-ministerial-candidate-brahmin/story/1/11757.html'
    ]

    # 'Ignoring response <403 http://www.dnaindia.com/analysis>: HTTP status code is not handled or not allowed'

    def __init__(self, name=None, **kwargs):
        self.allowed_domains = [websites_allowed_domains.get(self.url_from)]

        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.extensions.rpc.wordpress_xml_rpc_utils import WDXmlRPCUtils
        self.wd_rpc = WDXmlRPCUtils(kwargs['wd_host'], kwargs['wd_user'], kwargs['wd_passwd'])

        self._parser = websites_parses.get(self.url_from)

        super(DailyoDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(DailyoDebugSpider, cls).from_crawler(crawler,
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
        # self._parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._parser.parse(response.url, response, self.wd_rpc, thumbnail_url='', access_denied_cookie=None)
