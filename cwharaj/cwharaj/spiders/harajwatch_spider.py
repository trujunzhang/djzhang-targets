# -*- coding: utf-8 -*-
import scrapy
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
import logging


class HarajsSpiderWatch(scrapy.Spider):
    name = "harajwatch"
    allowed_domains = [
        "https://sa.opensooq.com/",
        'http://www.mstaml.com',
        'https://haraj.com.sa',
    ]
    start_urls = [
        # paginate
        'https://sa.opensooq.com',
    ]

    url_from_opensooq = 'https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=&page=1'
    url_from_mstaml = 'http://www.mstaml.com/market/?t=0&l=0&d=0&x=&u=&o=3'
    url_from_harajsa = 'https://haraj.com.sa'

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        self._cache_db = DatabaseFactory.get_database(CollectionTypes.cache,
                                                      kwargs['host'], kwargs['port'],
                                                      kwargs['user'], kwargs['passwd'],
                                                      kwargs['db'], kwargs['collection'])
        self._history_db = DatabaseFactory.get_database(CollectionTypes.history,
                                                        kwargs['host'], kwargs['port'],
                                                        kwargs['user'], kwargs['passwd'],
                                                        kwargs['db'], kwargs['collection'])

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self._opensooq_parser = OpensooqParse()

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._mstaml_Parse = MstamlParse()

        from cwharaj.parser.harajsa_parser import HarajSaParse
        self._harajsa_Parse = HarajSaParse()

        super(HarajsSpiderWatch, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsSpiderWatch, cls).from_crawler(crawler,
                                                          args,
                                                          host=crawler.settings.get('SQL_HOST'),
                                                          port=crawler.settings.get('SQL_PORT'),
                                                          user=crawler.settings.get('SQL_USER'),
                                                          passwd=crawler.settings.get('SQL_PASSWD'),
                                                          db=crawler.settings.get('SQL_DB'),
                                                          collection=crawler.settings.get('SQL_COLLECTION')
                                                          )

    # This methond is entry point
    def parse(self, response):
        # Here, 3 website need to fetch again and again(Through 24X7, full-time)
        yield scrapy.Request(self.url_from_opensooq, callback=self.parse_pagination_from_opensooq, dont_filter=True)
        yield scrapy.Request(self.url_from_mstaml, callback=self.parse_pagination_from_mstaml, dont_filter=True)
        yield scrapy.Request(self.url_from_harajsa, callback=self.parse_pagination_from_harajsa, dont_filter=True)

    def parse_pagination_from_opensooq(self, response):
        # Step 1: parse all list items to the cache database.
        self._opensooq_parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # step 2: fetching the same pagination again.
        logging.debug("Fetching the pagination from the opensooq again")
        yield scrapy.Request(self.url_from_opensooq, callback=self.parse_pagination_from_opensooq, dont_filter=True)

    def parse_pagination_from_mstaml(self, response):
        # Step 1: parse all list items to the cache database.
        self._mstaml_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # step 2: fetching the same pagination again.
        logging.debug("Fetching the pagination from the mstaml again")
        yield scrapy.Request(self.url_from_mstaml, callback=self.parse_pagination_from_mstaml, dont_filter=True)

    def parse_pagination_from_harajsa(self, response):
        # Step 1: parse all list items to the cache database.
        self._harajsa_Parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # step 2: fetching the same pagination again.
        logging.debug("Fetching the pagination from the harajsa again")
        yield scrapy.Request(self.url_from_harajsa, callback=self.parse_pagination_from_harajsa, dont_filter=True)
