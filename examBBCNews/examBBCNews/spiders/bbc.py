from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors import LinkExtractor
import scrapy
from examBBCNews.items import NewsItem, RelativeItem
from urlparse import urljoin
from scrapy.selector import HtmlXPathSelector
import re



# https://lucidworks.com/blog/2013/06/13/indexing-web-sites-in-solr-with-python/
class BbcSpider(CrawlSpider):
    name = "bbcnews"
    allowed_domains = ["bbc.co.uk"]
    start_urls = [
        # "http://www.bbc.com/news/technology-\d+",
        "http://www.bbc.co.uk/news/technology/",
    ]

    seen = set()

    # rules = [
    #     Rule(LinkExtractor(allow=['news/technology-\d+']), 'parse_story'),
    #     Rule(LinkExtractor(allow=['news/\d+']), 'parse_relative')]

    # def start_requests(self):
    #     yield self.make_requests_from_url(response.url)

    def parse(self, response):
        if response.url in self.seen:
            self.log('already seen  %s' % response.url)
        else:
            self.log('parsing  %s' % response.url)
            self.seen.add(response.url)

        hxs = HtmlXPathSelector(response)
        if re.match(r'http://www.bbc.co.uk/news/technology-', response.url):
            story = NewsItem()
            story['url'] = response.url
            story['headline'] = response.xpath("//title/text()").extract()
            story['intro'] = response.css('p.introduction::text').extract()
            yield story

    def parse_story(self, response):
        # self.start_urls = response.url

        story = NewsItem()
        story['url'] = response.url
        story['headline'] = response.xpath("//title/text()").extract()
        story['intro'] = response.css('p.introduction::text').extract()

        # return story
        yield story

        ## get the next URL to crawl
        url = response.url
        # yield scrapy.Request(url, self.parse_relative)
        yield scrapy.Request(url, self.parse_relative)

    def parse_relative(self, response):
        relative = RelativeItem()
        relative['relativeline'] = response.url
        relative['relativeInfo'] = response.xpath("//title/text()").extract()
        relative['reltive'] = response.css('p.introduction::text').extract()

        # return story
        yield relative
