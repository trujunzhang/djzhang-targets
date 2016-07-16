from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import WDPost


class HindustantimesParser(BaseParser):
    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.hindustantimes.value
        super(HindustantimesParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        # Because the Hindustantimes's pagination is complicated.
        # use HindustantimesPagination scraper to parse it.
        from cwpoliticl.extensions.specialsites.hindustantimes_pagination import HindustantimesPaginationScraper
        HindustantimesPaginationScraper(self, self.url_from, url, hxs, cache_db, history_db).parse_pagination()

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, '//*[@class="story-main"]/h1/span/text()')
        image_src = self.get_value_response(hxs,
                                            '//*[@class="story-main"]/*[@class="story-body"]/*[@class="cover"]/img/@src')

        content = self.get_all_value_response(hxs,
                                              '//*[@class="story-main"]/*[@class="story-body"]/*[@id="storyBody"]/p/text()')

        tags = hxs.xpath('//*[@class="story-main"]/*[@class="story-body"]/*[@class="articleTags"]/a/text()').extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item
