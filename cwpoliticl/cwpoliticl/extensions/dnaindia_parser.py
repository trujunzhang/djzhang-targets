from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class DnaIndiaParser(BaseParser):
    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.dnaindia.value
        super(DnaIndiaParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        selector = '//*[@class="media-list eventtracker"]'
        links = hxs.xpath(selector).extract()

        count = 1
        for link in links:
            href_selector = '{}/div[{}]/div[@class="media-left"]/a/@href'.format(selector, count)
            thumbnail_selector = '{}/div[{}]/div[@class="media-left"]/a/img/@src'.format(selector, count)
            count += 1

            href = self.get_value_with_urljoin(hxs, href_selector, url)
            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(href):
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)
            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie=None):
        title = self.get_value_response(hxs, '//*[@class="img-caption"]/h1/text()')
        image_src = self.get_value_response(hxs, '//*[@class="row article-img pos-lead"]/img/@src')
        content = self.get_all_value_response(hxs, '//*[@class="body-text"]/p/text()')

        tags = hxs.xpath('//*[@data-event-sub-cat="ArticleTags"]/div/div/ul/li/a/text()').extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags)

        post_id = wd_rpc.post_to_wd(item)

        return item
