from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class TheViewsPaperParser(BaseParser):
    detail_root_selector = '//*[@class="entry-content"]'
    page_selector_dict = {
        "title": '{}/*[@class="entry-header"]/h2/a/text()'.format(detail_root_selector),
        "image": '{}/*[@class="content"]/p[1]/img/@srcset'.format(detail_root_selector),
        "content": '{}/*[@class="content"]/p/text()'.format(detail_root_selector),
        "tags": '{}/*[@class="post-meta"]/*[@class="categories-links"]/a/text()'.format(detail_root_selector),
    }

    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.theviewspaper.value
        super(TheViewsPaperParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@class="container"]/*[@class="row"]/*[@class="col-md-8"]/article'
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, select_block)

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, select_block):
        links = hxs.xpath(select_block).extract()

        for idx, link in enumerate(links):
            href_selector = '{}[{}]/a/@href'.format(select_block, (idx + 1))
            thumbnail_selector = '{}[{}]/a/img/@src'.format(select_block, (idx + 1))

            href = self.get_value_response(hxs, href_selector)
            if history_db.check_history_exist(href):  # If the link already exist on the history database, ignore it.
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, self.page_selector_dict['title'])
        image_src = self.get_image_from_srcset(hxs, self.page_selector_dict['image'])
        content = self.get_all_value_response(hxs, self.page_selector_dict['content'], start_index=1)
        tags = hxs.xpath(self.page_selector_dict['tags']).extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item
