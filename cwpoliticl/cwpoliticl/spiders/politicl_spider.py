# -*- coding: utf-8 -*-

import scrapy
from scrapy.selector import Selector


class PoliticlsSpider(scrapy.Spider):
    name = "politicl"
    allowed_domains = ["xxx"]
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

        from cwpoliticl.extensions.rpc.the_views_papaer_xml_rpc_utils import TheViewsPaperXmlRPCUtils
        self.views_paper_wd_rpc = TheViewsPaperXmlRPCUtils(kwargs['wd_host'], kwargs['wd_user'], kwargs['wd_passwd'])

        from cwpoliticl.spiders.dispatch.spider_dispatch import SpiderDispatch
        self.spider_dispatch = SpiderDispatch()

        # Dynamic the domains and start url.
        self.allowed_domains = self.spider_dispatch.get_allowed_domains()
        self.start_urls = self.spider_dispatch.get_pagination_websites()

        super(PoliticlsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(PoliticlsSpider, cls).from_crawler(crawler,
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
        self.spider_dispatch.parse_from_detail_page(response.url, response, self.views_paper_wd_rpc)

        # step 1: request the last row on the cache database
        _row = self.get_row_from_cache(response.url, WebsiteTypes.mstaml.value)

        yield scrapy.Request(_row['url'], callback=self.get_call_back(_row['url_from']), dont_filter=True)

    def get_row_from_cache(self, _last, url_from):
        while True:
            _row = self._cache_db.get_oldest_row(_last, url_from)
            if _row:
                return _row

            # Return 'None' when the cache table is empty,
            # So we set the _last to empty string.
            _last = ""

            time.sleep(4)
