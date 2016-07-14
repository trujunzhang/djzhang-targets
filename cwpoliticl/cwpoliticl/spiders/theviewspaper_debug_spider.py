# -*- coding: utf-8 -*-

import scrapy


class TheViewsPaperDebugSpider(scrapy.Spider):
    name = "theviewspaper_debug"
    allowed_domains = ["http://theviewspaper.net"]
    start_urls = [
        # Pagination
        # 'http://theviewspaper.net',
        # Detail
        # 'http://theviewspaper.net/to-ban-or-not-to-ban-the-regulation-of-hate-speech/',
        'http://theviewspaper.net/the-rise-and-the-alleged-fall-of-our-very-own-tulsi/'
    ]

    # 'Ignoring response <403 http://www.dnaindia.com/analysis>: HTTP status code is not handled or not allowed'

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)

        from cwpoliticl.extensions.rpc.the_views_papaer_xml_rpc_utils import TheViewsPaperXmlRPCUtils
        self.views_paper_wd_rpc = TheViewsPaperXmlRPCUtils(kwargs['wd_host'], kwargs['wd_user'], kwargs['wd_passwd'])

        from cwpoliticl.extensions.theviewspaper_parser import TheViewsPaperParser
        self._the_views_paper_Parse = TheViewsPaperParser()

        super(TheViewsPaperDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(TheViewsPaperDebugSpider, cls).from_crawler(crawler,
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
        # self._the_views_paper_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        access_denied_cookie = response.headers.get('Set-Cookie').split(';', 1)[0]

        item = self._the_views_paper_Parse.parse(response.url, response, self.views_paper_wd_rpc, access_denied_cookie)
