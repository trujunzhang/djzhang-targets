# -*- coding: utf-8 -*-
import scrapy

from scrapy.selector import Selector

from cwitunes.items import ItuneApp


class ItunesSpider(scrapy.Spider):
    name = 'itunes'
    allowed_domains = ['itunes.apple.com']
    start_urls = ["https://itunes.apple.com/us/genre/ios-food-drink/id6023?mt=8"]

    def __init__(self, name=None, **kwargs):
        from cwitunes.DBUtils import DBUtils
        self.dbutils = DBUtils(kwargs['mongo_uri'], kwargs['mongo_db'], kwargs['collection_name'])
        self.dbutils.open_spider()
        super(ItunesSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(ItunesSpider, cls).from_crawler(crawler,
                                                     args,
                                                     mongo_uri=crawler.settings.get('MONGODB_SERVER'),
                                                     mongo_db=crawler.settings.get('MONGODB_DB', 'items'),
                                                     collection_name=
                                                     "__history_" + crawler.settings.get('MONGODB_COLLECTION')
                                                     )

    def parse(self, response):
        # abstractPath = "https://itunes.apple.com/us/app/find-craft-beer/id340206461?mt=8&ign-mpt=uo%3D4"
        # yield scrapy.Request(abstractPath, self.parse_detail, meta={'type': "wanghao"})

        select = '//ul[@class="list alpha"]/li'
        sel = Selector(response)
        navs = sel.xpath(select)
        count = 0
        for nav in navs:
            # if count > 1:
            #     break
            title = nav.xpath(select + '/a/text()')[count].extract()
            abstractPath = nav.xpath(select + '/a/@href')[count].extract()

            count += 1

            yield scrapy.Request(abstractPath, self.parse_alpha, meta={'type': title})

    def parse_alpha(self, response):
        select = '//ul[@class="list paginate"]/li'
        sel = Selector(response)
        navs = sel.xpath(select)
        count = 0
        for nav in navs:
            # if count > 1:
            #     break
            title = nav.xpath(select + '/a/text()')[count].extract()
            abstractPath = nav.xpath(select + '/a/@href')[count].extract()

            count += 1

            yield scrapy.Request(abstractPath, self.parse_pages, meta={'type': title})

    # abstractPath = "https://itunes.apple.com/us/app/find-craft-beer/id340206461?mt=8&ign-mpt=uo%3D4"
    def parse_pages(self, response):
        select = '//div[@id="selectedcontent"]/div/ul/li'
        sel = Selector(response)
        apps = sel.xpath(select)
        count = 0
        for app in apps:
            # if count > 2:
            #     break
            title = app.xpath(select + '/a/text()')[count].extract()
            abstractPath = app.xpath(select + '/a/@href')[count].extract()

            count += 1

            if not self.dbutils.check_exist_and_save(abstractPath):
                yield scrapy.Request(abstractPath, self.parse_detail, meta={'type': title})

    def parse_detail(self, response):
        hxs = Selector(response)

        url = response.url

        thumbnail = self.getValue(hxs, '//div[@class="artwork"]/meta/@content', 0)
        # hxs.xpath('//div[@class="artwork"]/meta/@content')[0].extract()
        NameOfApplication = self.getValue(hxs, '//div[@class="left"]/h1/text()', 0)
        # hxs.xpath('//div[@class="left"]/h1/text()')[0].extract()  #
        LastTimeUpdatedDate = self.getValue(hxs, '//ul[@class="list"]/li[@class="release-date"]/span/text()', 1)
        # hxs.xpath('//ul[@class="list"]/li[@class="release-date"]/span/text()')[1].extract()  # Updated: Oct 13, 2015
        Developer = self.getValue(hxs, '//div[@class="left"]/h2/text()', 0)
        # hxs.xpath('//div[@class="left"]/h2/text()')[0].extract()  # By Ivan Sysoev
        Website = self.getValue(hxs, '(//div[@class="app-links"]/a)/@href', 0)
        # hxs.xpath('(//div[@class="app-links"]/a)/@href')[0].extract()  # https://ivsy.github.io

        ofReviews = self.getValue(hxs, '(//div[@class="rating"]//span[@class="rating-count"]/text())', 1)
        # hxs.xpath('(//div[@class="rating"]//span[@class="rating-count"]/text())')[1].extract()  # All Versions:
        ofReviewsCurrent = self.getValue(hxs, '//div[@class="rating"]//span[@class="rating-count"]/text()', 0)
        # hxs.xpath('//div[@class="rating"]//span[@class="rating-count"]/text()')[0].extract()  # Current Version:

        # starts = hxs.xpath('//a[@class="see-all"]/@href')[0].extract()  #
        # startsCurrent = hxs.xpath('//a[@class="see-all"]/@href')[0].extract()  #
        starts = ""
        startsCurrent = ""

        # description = hxs.xpath('//div[@class="center-stack"]/div/p/text()').extract()  # description
        version = self.getValue(hxs, '//ul[@class="list"]/li[4]/span/text()', 1)
        # hxs.xpath('//ul[@class="list"]/li[4]/span/text()')[1].extract()  # Version: 2.0

        item = ItuneApp()

        item['name'] = NameOfApplication
        item['url'] = url
        item['thumbnail'] = thumbnail

        item['appLastUpdated'] = LastTimeUpdatedDate

        item['developer'] = Developer
        item['website'] = Website

        item['ofReviews'] = ofReviews
        item['ofReviewsCurrent'] = ofReviewsCurrent

        item['starts'] = starts
        item['startsCurrent'] = startsCurrent

        item['version'] = version

        return item

    def getValue(self, hxs, query, index, default=""):
        list = hxs.xpath(query)
        if len(list) > index:
            value = list[index].extract()
            return value
        return default
