from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import WDPost


class HindustantimesParser(BaseParser):
    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.hindustantimes.value
        super(HindustantimesParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        """
        Because the Hindustantimes's pagination is complicated.
        Using HindustantimesPagination scraper to parse it.

        :param url:
        :param hxs:
        :param cache_db:
        :param history_db:
        :return:
        """
        from cwpoliticl.extensions.specialsites.hindustantimes_pagination import HindustantimesPaginationScraper
        HindustantimesPaginationScraper(self, self.url_from, url, hxs, cache_db, history_db).parse_pagination()

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, '//*[@class="story_pg_head"]/h1/text()')
        image_src = self.get_value_with_urljoin(hxs,
                                                '//*[@class="story_top_news"]/*[@class="news_photo"]/img/@src',
                                                url)
        content = self.get_all_value_response(hxs, '//*[@class="div_storyContent"]/p/text()')
        tags = hxs.xpath('//*[@class="story_tags"]/li/a/text()').extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item
