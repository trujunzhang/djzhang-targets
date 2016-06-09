# -*- coding: utf-8 -*-
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector

from cwgoogleplay.items import GooglePlay
import urlparse


class GoogleplaySpider(scrapy.Spider):
    name = "googleplay_browser"
    allowed_domains = ["play.google.com"]
    start_urls = [
        'https://play.google.com/store/apps/collection/topselling_new_paid',

        # 'http://www.play.google.com/',
        # 'https://play.google.com/store/apps/details?id=org.videolan.vlc',
        # 'https://play.google.com/store/apps/details?id=videoplayer.mediaplayer.hdplayer' # email(no website,no address)
        # 'https://play.google.com/store/apps/details?id=com.sony.tvsideview.dtcpplayer'  # paid(contains price)

        # fix issues
        # 'https://play.google.com/store/movies/details/Dreamworks_How_to_Train_Your_Dragon_Legends?id=I_P-jbumL5o',
        # 'https://play.google.com/store/apps/details?id=com.WindbeastGames.DigipetX',
        # 'https://play.google.com/store/apps/details?id=com.explodingkittens.projectbombsquad',
    ]

    def __init__(self, name=None, **kwargs):
        from cwgoogleplay.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        super(GoogleplaySpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(GoogleplaySpider, cls).from_crawler(crawler,
                                                         args,
                                                         mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                         )

    def parse(self, response):
        # def parsexxx(self, response):
        hxs = HtmlXPathSelector(response)
        links = hxs.select('//a[@class="card-click-target"]/@href').extract()
        count = 0
        for link in links:
            appLink = urlparse.urljoin(response.url, link.strip())
            count += 1

            yield scrapy.Request(appLink, self.parse_detail)

    def parse_detail(self, response):
        # def parse(self, response):
        hxs = HtmlXPathSelector(response)

        cluster = self.getValue(hxs, '// a[ @class = "document-subtitle primary"]/@href', 0)
        cluster = urlparse.urljoin(response.url, cluster.strip())
        category = self.getValue(hxs, '// a[ @class = "document-subtitle category"]/@href', 0)
        category = urlparse.urljoin(response.url, category.strip())

        price = self.getValue(hxs,
                              '//div[@class="details-actions"]/span/span/button[@data-uitype="200"]/span[2]/text()', 0)

        _thumbnail_url = self.getValue(hxs, '//div[@class="cover-container"]/img/@src', 0)
        _scheme = urlparse.urlparse(_thumbnail_url).scheme
        thumbnail = _thumbnail_url
        if not _scheme:
            thumbnail = "https:" + _thumbnail_url

        title = self.getValue(hxs,
                              '//div[@class="info-container"]/div[@class="document-title"]/div[@class="id-app-title"]/text()',
                              0)
        reviewsNum = self.getValue(hxs, '//span[@class="reviews-num"]/text()', 0)

        datePublished = self.getValue(hxs, '//div[@itemprop="datePublished"]/text()', 0)

        website = ""
        email = ""
        linksSelect = '//a[@class ="dev-link"]'
        links = hxs.xpath(linksSelect)
        count = 0
        for link in links:
            _href = link.xpath(linksSelect + '/@href')[count].extract()
            if "mailto" in _href:
                email = self.getValue(hxs, linksSelect + '/@href', count).replace("mailto:", "")
            elif "https://www.google.com" in _href:
                website = self.getValue(hxs, linksSelect + '/@href', count)
            count += 1

        address = self.getValue(hxs, '//div[@class="content physical-address"]/text()', 0).replace("\n", "")

        item = PlayApp(
            url=response.url,
            cluster=cluster,
            category=category,
            price=price,
            thumbnail=thumbnail,
            title=title,
            reviewsNum=reviewsNum,
            datePublished=datePublished,
            website=website,
            email=email,
            address=address,
        )

        yield item

        yield scrapy.Request(cluster, self.parse_cluster)

        # yield scrapy.Request(response.url, self.parse_relatived_app)

        # the below is that crawl a random relatived app.
        select = '//a[@class="card-click-target"]'
        sel = Selector(response)
        navs = sel.xpath(select)

        len__ = navs.__len__()
        if not len__ == 0:
            index = Random().randint(0, (len__ - 1))
            if index > 0 & index < len__:
                hxs = navs.__getitem__(index)
                extractedLink = hxs.xpath(select + '//@href')[index].extract()
                relativeAppLink = urlparse.urljoin(response.url, extractedLink.strip())
                if not self.dbutils.check_exist_and_save(relativeAppLink):
                    yield scrapy.Request(relativeAppLink, self.parse_detail)

    def parse_cluster(self, response):
        _seen = set()

        hxs = HtmlXPathSelector(response)
        links = hxs.select('//div/a[@class="card-click-target"]/@href').extract()
        count = 0
        for link in links:
            appLink = urlparse.urljoin(response.url, link.strip())
            if appLink in _seen:
                self.log('already seen')
            else:
                _seen.add(appLink)
                if not self.dbutils.check_exist_and_save(appLink):
                    yield scrapy.Request(appLink, self.parse_detail)

            count += 1

    def getValue(self, hxs, query, index, default=""):
        list = hxs.xpath(query)
        if len(list) > index:
            value = list[index].extract()
            return value
        return default
