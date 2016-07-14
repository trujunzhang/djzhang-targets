from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WebsiteTypes, WDPost


class IndianExpressParser(BaseParser):
    def __init__(self):
        self.url_from = WebsiteTypes.indianexpress.value
        super(IndianExpressParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        selector = '//*[@class="profile-container"]/*[@class="opi-story"]'
        links = hxs.xpath(selector).extract()  # Type: List['unicode']

        count = 1
        for link in links:
            href_selector = '{}[{}]/h6/a/@href'.format(selector, count)
            thumbnail_selector = '{}[{}]/*[@class="sto-img"]/a/img/@src'.format(selector, count)
            count += 1

            href = self.get_value_response(hxs, href_selector)
            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(href):
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)
            thumbnail_src = self._add_url_scheme(thumbnail_src)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie=None):
        title = self.get_value_response(hxs, '//*[@class="heading-part"]/*[@itemprop="headline"]/text()')
        image_src = self.get_value_response(hxs, '//*[@itemprop="articleBody"]/*[@class="custom-caption"]/img/@src')
        content = self.get_all_value_response(hxs, '//*[@itemprop="articleBody"]/p', max_len=2, sperator='\n' + '\n')

        tags = hxs.xpath('//*[@class="storytags"]/ul/li/a/text()').extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags)

        post_id = wd_rpc.post_to_wd(item)

        return item
