from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WebsiteTypes, WDPost


class DnaIndiaParser(BaseParser):
    def __init__(self):
        self.url_from = WebsiteTypes.dnaindia.value
        super(DnaIndiaParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        selector = '//*[@class="media-list eventtracker"]'
        links = hxs.xpath(selector).extract()

        count = 1
        for link in links:
            href_selector = "{}/div[{}]/div[2]/a/@href".format(selector, count)
            detailed_href = self.get_value_with_urljoin(hxs, href_selector, url)

            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(detailed_href):
                continue

            cache_db.save_cache(CacheItem.get_default(url=detailed_href, url_from=self.url_from))

            count += 1

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie=None):
        title = self.get_value_response(hxs, '//*[@class="img-caption"]/h1/text()')
        image_src = self.get_value_response(hxs, '//*[@class="row article-img pos-lead"]/img/@src')
        content = self.get_all_value_response(hxs, '//*[@class="body-text"]/p', max_len=2, sperator='\n' + '\n')

        tags = hxs.xpath('//*[@data-event-sub-cat="ArticleTags"]/div/div/ul/li/a/text()').extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags)

        post_id = wd_rpc.post_to_wd(item)

        return item
