# -*- coding: utf-8 -*-
import scrapy

from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors.sgml import SgmlLinkExtractor
from scrapy.selector import HtmlXPathSelector
from scrapy.http import Request
from cwlinkedinemail.items import LinkedEmailApp
import urlparse


class LinkedemailSpider(CrawlSpider):
    handle_httpstatus_list = [999]

    """
    Define the crawler's start URIs, set its follow rules, parse HTML
    and assign values to an item. Processing occurs in ../pipelines.py
    """

    name = "linkedemail"
    allowed_domains = ["linkedin.com"]

    # Uncomment the following lines for full spidering
    '''
    centilist_one = (i for i in xrange(1,100))
    centilist_two = (i for i in xrange(1,100))
    centilist_three = (i for i in xrange(1,100))
    start_urls = ["http://www.linkedin.com/directory/people-%s-%d-%d-%d"
                  % (alphanum, num_one, num_two, num_three)
                    for alphanum in "abcdefghijklmnopqrstuvwxyz"
                    for num_one in centilist_one
                    for num_two in centilist_two
                    for num_three in centilist_three
                  ]
    '''

    # Temporary start_urls for testing; remove and use the above start_urls in production
    start_urls = [
        # "http://www.linkedin.com/directory/people-a-23-23-2"

        "https://www.linkedin.com/in/lisa-zargarpur-61b13519"
    ]

    # TODO: allow /in/name urls too?
    # rules = [
    #     Rule(SgmlLinkExtractor(allow=('\/pub\/.+')), callback='parse_item')
    # ]

    def __init__(self, name=None, **kwargs):
        from cwlinkedinemail.DBUtils import DBUtils
        self.dbutils = DBUtils(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection_name'])
        self.dbutils.open_spider()
        super(LinkedemailSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(LinkedemailSpider, cls).from_crawler(crawler,
                                                          args,
                                                          mongo_uri=crawler.settings.get('MONGODB_SERVER'),
                                                          mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
                                                          collection_name=(
                                                              "__history_" + crawler.settings.get('MONGODB_COLLECTION'))
                                                          )

    def parsexxx(self, response):
        hxs = HtmlXPathSelector(response)

        links = hxs.select('//div[@class="columns"]/ul/li/a/@href').extract()
        count = 0
        for link in links:
            pageLink = urlparse.urljoin(response.url, link.strip())

            if count > 2:
                break
            count += 1

            # if not self.dbutils.check_exist_and_save(pageLink):
            yield scrapy.Request(pageLink, self.parse_page)

    def parse(self, response):
        hxs = HtmlXPathSelector(response)

        item = LinkedEmailApp()
        # TODO: is this the best way to check that we're scraping the right page?
        item['full_name'] = hxs.select('//div[@id="name-container"]/div[@id="name"]/h1/span/span/text()').extract()
        if not item['full_name']:
            pass
        # # recursively parse list of duplicate profiles
        #     # NOTE: Results page only displays 25 of possibly many more names;
        #     # LinkedIn requests authentication to see the rest. Need to resolve
        #
        #     # TODO: add error checking here to ensure I'm getting the right links
        #     # and links from "next>>" pages
        #     multi_profile_urls = hxs.select('//*[@id="result-set"]/li/h2/strong/ \
        #                                   a/@href').extract()
        #     for profile_url in multi_profile_urls:
        #         yield Request(profile_url, callback=self.parse_item)
        else:
            item['first_name'] = hxs.select('//*[@id="name"]/span/span/text()').extract(),
            item['last_name'] = hxs.select('//*[@id="member-1"]/p/text()').extract()

        value = self.getValue(hxs,'//div[@id="headline"]/p[@class="title"]/text()',0)
        item['headline_title'] = hxs.select('//div[@id="headline"]/p[@class="title"]/text()').extract(),
        item['locality'] = hxs.select('//div[@id="location-container"]/div[@id="location"]/dl/dd/span/a/text()').extract(),
        item['industry'] = hxs.select('//div[@id="location-container"]/div[@id="location"]/dl/dd[@class="industry"]/text()').extract()

        return item


    def getValue(self, hxs, query, index, default=""):
        list = hxs.xpath(query)
        if len(list) > index:
            value = list[index].extract()
            return value
        return default

