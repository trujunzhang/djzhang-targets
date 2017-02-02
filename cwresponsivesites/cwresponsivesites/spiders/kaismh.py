# -*- coding: utf-8 -*-
import scrapy
from selenium import webdriver

from scrapy.xlib.pydispatch import dispatcher
from scrapy import signals
import logging


class KaismhSpider(scrapy.Spider):
    name = "kaismh"
    allowed_domains = ["kaismh.wordpress.com"]
    start_urls = (
        'https://kaismh.wordpress.com/2016/04/29/extracting-data-from-websites-using-scrapy/',
    )

    custom_settings = {'REDIRECT_ENABLED': False}
    handle_httpstatus_list = [404, 405, 301, 302]

    def __init__(self, name=None, **kwargs):
        from cwresponsivesites.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['mg_host'],
                                           kwargs['mg_collection'],
                                           kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._logs_db = database_factory.get_database(CollectionTypes.logs)

        from cwresponsivesites.extensions.rpc.wordpress_xml_rpc_utils import WDXmlRPCUtils
        self.wd_rpc = WDXmlRPCUtils(kwargs['mg_host'],
                                    kwargs['mg_collection'],
                                    kwargs['cloudinary_rest'],
                                    kwargs['topics_filter_keys'],
                                    self._logs_db)

        # the dispatcher is now called in init
        dispatcher.connect(self.handle_spider_closed, signals.spider_closed)

        super(KaismhSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(KaismhSpider, cls).from_crawler(
            crawler,
            args,
            collection_name=crawler.settings.get('SQL_COLLECTION_NAME'),
            mg_host=crawler.settings.get('MG_HOST'),
            mg_collection=crawler.settings.get('MG_COLLECTION'),
            cloudinary_rest=crawler.settings.get('CLOUDINARY_REST'),
            topics_filter_keys=crawler.settings.get('TOPICS_FILTER_KEYS')
        )

    def parse(self, response):
        driver = webdriver.PhantomJS()
        driver.set_window_size(240, 480)
        driver.get(response.url)

        driver.save_screenshot('/tmp/screen.png')
        # And than you can keep working from here
        # cart_style = driver.find_element_by_id('secondary').get_attribute('style')

        driver.quit()

        pass

    def handle_spider_closed(self, spider, reason):  # added self
        self._cache_db.close_spider()
        self._history_db.close_spider()
        self._logs_db.close_spider()

        logging.debug("Not found the caches currently, the schedulared task end!")
