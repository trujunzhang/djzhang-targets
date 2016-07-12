# -*- coding: utf-8 -*-

import scrapy


class DnaIndiaDebugSpider(scrapy.Spider):
    name = "dnaindia_debug"
    allowed_domains = ["http://www.dnaindia.com"]
    start_urls = [
        'http://www.dnaindia.com/analysis',
    ]

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
                                                            mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                            )

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
