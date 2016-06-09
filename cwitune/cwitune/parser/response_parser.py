from cwitune.items import Itune
from cwitune.parser.base_parser import BaseParser

import urlparse


class ResponseParse(BaseParser):
    def __init__(self):
        super(ResponseParse, self).__init__()

    def parse_paginate(self, url, hxs, cache_db):
        links = hxs.select('//a[@class="card-click-target"]/@href').extract()
        count = 0
        for link in links:
            appLink = urlparse.urljoin(url, link.strip())
            cache_db.process_item(url)
            count += 1

    def parse(self, url, hxs):
        thumbnail = self.get_value_from_response(hxs, '//div[@class="artwork"]/meta/@content', 0)
        # hxs.xpath('//div[@class="artwork"]/meta/@content')[0].extract()
        NameOfApplication = self.get_value_from_response(hxs, '//div[@class="left"]/h1/text()', 0)
        # hxs.xpath('//div[@class="left"]/h1/text()')[0].extract()  #
        LastTimeUpdatedDate = self.get_value_from_response(hxs, '//ul[@class="list"]/li[@class="release-date"]/span/text()', 1)
        # hxs.xpath('//ul[@class="list"]/li[@class="release-date"]/span/text()')[1].extract()  # Updated: Oct 13, 2015
        Developer = self.get_value_from_response(hxs, '//div[@class="left"]/h2/text()', 0)
        # hxs.xpath('//div[@class="left"]/h2/text()')[0].extract()  # By Ivan Sysoev
        Website = self.get_value_from_response(hxs, '(//div[@class="app-links"]/a)/@href', 0)
        # hxs.xpath('(//div[@class="app-links"]/a)/@href')[0].extract()  # https://ivsy.github.io

        ofReviews = self.get_value_from_response(hxs, '(//div[@class="rating"]//span[@class="rating-count"]/text())', 1)
        # hxs.xpath('(//div[@class="rating"]//span[@class="rating-count"]/text())')[1].extract()  # All Versions:
        ofReviewsCurrent = self.get_value_from_response(hxs, '//div[@class="rating"]//span[@class="rating-count"]/text()', 0)
        # hxs.xpath('//div[@class="rating"]//span[@class="rating-count"]/text()')[0].extract()  # Current Version:

        # starts = hxs.xpath('//a[@class="see-all"]/@href')[0].extract()  #
        # startsCurrent = hxs.xpath('//a[@class="see-all"]/@href')[0].extract()  #
        starts = ""
        startsCurrent = ""

        # description = hxs.xpath('//div[@class="center-stack"]/div/p/text()').extract()  # description
        version = self.get_value_from_response(hxs, '//ul[@class="list"]/li[4]/span/text()', 1)
        # hxs.xpath('//ul[@class="list"]/li[4]/span/text()')[1].extract()  # Version: 2.0

        item = Itune(
            url=url,
            name=NameOfApplication,
            thumbnail=thumbnail,
            appLastUpdated=LastTimeUpdatedDate,
            developer=Developer,
            website=Website,
            ofReviews=ofReviews,
            ofReviewsCurrent=ofReviewsCurrent,
            starts=starts,
            startsCurrent=startsCurrent,
            version=version
        )

        return item

