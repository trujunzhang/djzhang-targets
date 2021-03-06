from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class IndianExpressParser(BaseParser):
    page_selector_dict = {
        "title": '//*[@class="heading-part"]/*[@itemprop="headline"]/text()',
        "image": '//*[@itemprop="articleBody"]/*[@class="custom-caption"]/img/@src',
        "content": '//*[@itemprop="articleBody"]/p/text()',
        "tags": '//*[@class="storytags"]/ul/li/a/text()',
    }

    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.indianexpress.value
        super(IndianExpressParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@class="profile-container"]/*[@class="opi-story"]'
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, select_block)

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, select_block):
        links = hxs.xpath(select_block).extract()

        for idx, link in enumerate(links):
            href_selector = '{}[{}]/h6/a/@href'.format(select_block, (idx + 1))
            thumbnail_selector = '{}[{}]/*[@class="sto-img"]/a/img/@src'.format(select_block, (idx + 1))

            href = self.get_value_response(hxs, href_selector)
            if history_db.check_history_exist(href):  # If the link already exist on the history database, ignore it.
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)
            thumbnail_src = self._add_url_scheme(thumbnail_src)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie=None):
        title = self.get_value_response(hxs, self.page_selector_dict['title'])
        image_src = self.get_value_response(hxs, self.page_selector_dict['image'])
        content = self.get_all_value_response(hxs, self.page_selector_dict['content'])
        tags = hxs.xpath(self.page_selector_dict['tags']).extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags)

        post_id = wd_rpc.post_to_wd(item)

        return item
