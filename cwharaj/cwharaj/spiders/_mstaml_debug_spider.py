# -*- coding: utf-8 -*-
import scrapy

from cwharaj.scraped_websites import WebsiteTypes, websites_allowed_domains, is_pagination


class MstamlDebugWatchSpider(scrapy.Spider):
    url_from = WebsiteTypes.mstaml
    name = "{}_debug".format(url_from.value)

    details_urls = [
        # Details
        # 'http://www.mstaml.com/2073561/للبيع_جمس_يوكن_1999/'
        # 'http://www.mstaml.com/2078991/للبيع_اكسبلورر_أبيض_2010_وارد_توكيلات_الجزيرة/'
        # 'http://www.mstaml.com/2079607/افضل_عروض_لطابعات_الكروت/'
        # contains emoji unicode
        # 'http://www.mstaml.com/2073595/للبيع_قطط_تركيه/'
        # parse time_added and last_updated_ad
        # 'http://www.mstaml.com/2079892/تفويض_إلكتروني_للمؤسسات/'
        # parsing member(has e-mail)
        'http://www.mstaml.com/2080634/تلفزيون_Haier_29_بوصه_للبيع_بحاله_ممتازه_مستعمل/'
    ]

    def __init__(self, name=None, **kwargs):
        self.allowed_domains = [websites_allowed_domains.get(self.url_from)]

        if is_pagination:
            self.start_urls = [WebsiteTypes.get_pagination_url(self.url_from)]
        else:
            self.start_urls = self.details_urls

        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.parser.mstaml_parser import MstamlParse
        self._parser = MstamlParse()

        super(MstamlDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(MstamlDebugWatchSpider, cls).from_crawler(crawler,
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
        if is_pagination:
            self._parser.parse_paginate(response.url, response, self._cache_db, self._history_db)
        else:
            item = self._parser.parse(response.url, response, self._item_db)
