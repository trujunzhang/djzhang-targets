# -*- coding: utf-8 -*-
import scrapy

from cwharaj.scraped_websites import WebsiteTypes, websites_allowed_domains, is_pagination


class HarajsaDebugWatchSpider(scrapy.Spider):
    url_from = WebsiteTypes.harajsa
    name = "{}_debug".format(url_from.value)

    details_urls = [
        # Details
        # 'https://haraj.com.sa/1113951569/ساعات_واطقم_واساور_ومحافظ_ماركات_وصل_حديثا/'
        # 'https://haraj.com.sa/1111841958/%D9%83%D8%A7%D8%B4%D9%81_%D8%A7%D9%84%D8%B5%D8%A8%D8%BA_%D9%88%D8%A7%D9%84%D8%B3%D9%85%D9%83%D8%B1%D8%A9_%D8%A7%D9%84%D8%A7%D9%84%D9%85%D8%A7%D9%86%D9%8A_%D8%A7%D9%84%D9%87%D8%A7%D9%86%D8%AF%D9%8A/'
        # fix parsing pictures
        # 'https://haraj.com.sa/1113955610/%D8%A7%D8%B1%D8%B6_%D9%84%D9%84%D8%A8%D9%8A%D8%B9_%D9%81%D9%8A_%D8%AD%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%AE%D8%A9_%D9%81%D9%8A_%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9/'
        # fix parsing time
        # 'https://haraj.com.sa/1113956653/LG_G4_/'
        # Section
        'https://haraj.com.sa/1114020535/المحفظة_المثالية/'
        # 'https://haraj.com.sa/1113955445/للبيع_اسكاليد_موديل_2014_بسعر_جيد/'
        # 'https://haraj.com.sa/1114186091/الرياض/'  # 2 comments
        # 'https://haraj.com.sa/1113412781/مستودعات_ومصانع_للايجار_او_للبيع_/'  # four sections
        # mysql: insert the ads row failure, (1406, "Data too long for column 'ads_title' at row 1")
        # title is 'زيت_زيتون_فلسطيني_الشرقية_جيزان_نجران_الطايف_ابها_محايل_عسير_حائل_الشمال_المدينه_مكة_الرياض_جدة_أصلي'
        # 'https://haraj.com.sa/1111467437/زيت_زيتون_فلسطيني_الشرقية_جيزان_نجران_الطايف_ابها_محايل_عسير_حائل_الشمال_المدينه_مكة_الرياض_جدة_أصلي'
        # empty page
        # 'https://haraj.com.sa/1114426505/باتلفيلد_4_ورزدينت_ايفل_6_مقابل_قراند_/'
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

        from cwharaj.parser.harajsa_parser import HarajSaParse
        self._parser = HarajSaParse()

        super(HarajsaDebugWatchSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(HarajsaDebugWatchSpider, cls).from_crawler(crawler,
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
            _ids_id = item["id_ads"]
            # _row = self._cache_db.get_last_row("")
