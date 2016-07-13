# -*- coding: utf-8 -*-

import scrapy


class DnaIndiaDebugSpider(scrapy.Spider):
    name = "dnaindia_debug"
    allowed_domains = ["www.dnaindia.com"]
    start_urls = [
        # Pagination
        # 'http://www.dnaindia.com/analysis',
        # Detail
        # 'http://www.dnaindia.com/analysis/editorial-dnaedit-modi-s-manoeuvre-2231861'
        'http://www.dnaindia.com/analysis/column-nda-s-decisive-push-to-garner-tax-from-fugitive-firms-2232199'
    ]

    # 'Ignoring response <403 http://www.dnaindia.com/analysis>: HTTP status code is not handled or not allowed'

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwpoliticl.extensions.dnaindia_parser import DnaIndiaParser
        self._dna_india_Parse = DnaIndiaParser()

        super(DnaIndiaDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(DnaIndiaDebugSpider, cls).from_crawler(crawler,
                                                            args,
                                                            host=crawler.settings.get('SQL_HOST'),
                                                            port=crawler.settings.get('SQL_PORT'),
                                                            user=crawler.settings.get('SQL_USER'),
                                                            passwd=crawler.settings.get('SQL_PASSWD'),
                                                            db=crawler.settings.get('SQL_DB'),
                                                            collection_name=crawler.settings.get(
                                                                'SQL_COLLECTION_NAME')
                                                            )

    def parse(self, response):
        # self._dna_india_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        item = self._dna_india_Parse.parse(response.url, response, self._item_db)
