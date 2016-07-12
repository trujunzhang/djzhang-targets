# -*- coding: utf-8 -*-

import scrapy


# yield WebdriverRequest(_url, callback=self.parse_category_full_page)


class PoliticlsDebugSpider(scrapy.Spider):
    name = "politicl_debug"
    allowed_domains = ["xxx"]
    start_urls = [
        'yyy',
    ]

    def __init__(self, name=None, **kwargs):
        from cwpoliticl.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwpoliticl.parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(PoliticlsDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsDebugSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        item = self._crawl_parser.parse(response.url, response)
        yield item

        self._history_db.process_item(response.url)
