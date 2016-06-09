# -*- coding: utf-8 -*-
import scrapy

from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors.sgml import SgmlLinkExtractor
from scrapy.selector import HtmlXPathSelector
from cwcraigs.items import CraigslistSampleItem

class CraigsSpider(CrawlSpider):
    name = "craigs"
    allowed_domains = ["sfbay.craigslist.org"]
    start_urls = ["http://sfbay.craigslist.org/search/vnn"]

    # the below is next page url
    # 'http://sfbay.craigslist.org/search/npo?s=100'
    # 'http://sfbay.craigslist.org/search/npo?s=200'

    rules = (
        # Rule(SgmlLinkExtractor(allow=(), restrict_xpaths=('//div[@class="pageNumbers"]/a',)), callback="parse_items", follow= True),
        Rule(SgmlLinkExtractor(allow=(), restrict_xpaths=('//span[@class="buttons"]/a',)), callback="parse_items",
             follow=True),
    )

    def __init__(self, name=None, **kwargs):
        from cwcraigs.DBUtils import DBUtils
        self.dbutils = DBUtils(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection_name'])
        self.dbutils.open_spider()
        super(CraigsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(CraigsSpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER'),
                                                         mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
                                                         collection_name=(
                                                             "__history" + crawler.settings.get('MONGODB_COLLECTION'))
                                                         )

    def parse_items(self, response):
        hxs = HtmlXPathSelector(response)
        titles = hxs.xpath('//span[@class="pl"]')
        items = []

        count = 0
        for title in titles:
            item = CraigslistSampleItem()
            item["url"] = (response.url+"-{0}").format(count)
            item["title"] = title.xpath('a/span/text()').extract()
            item["link"] = title.xpath("a/@href").extract()
            items.append(item)

            count += 1
        return(items)