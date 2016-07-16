from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class News18Parser(BaseParser):
    detail_root_selector = '//*[@class="section-blog-left-aricle"]'
    page_selector_dict = {
        "title": '{}/h1/text()'.format(detail_root_selector),
        "image": '{}/*[@class="articleimg"]/img/@src'.format(detail_root_selector),
        "content": '{}/*[@id="article_body"]/p/text()'.format(detail_root_selector),
        "tags": '{}/*[@class="story-body"]/*[@class="articleTags"]/a/text()'.format(detail_root_selector),
    }

    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.news18.value
        super(News18Parser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@class="author-lest-blog cflip"]/*[@class="author-list flip-container"]'
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, select_block)

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, select_block):
        links = hxs.xpath(select_block).extract()

        for idx, link in enumerate(links):
            href_selector = '{}[{}]/div/div/figure/a/@href'.format(select_block, (idx + 1))
            thumbnail_selector = '{}[{}]/div/div/figure/a/img/@src'.format(select_block, (idx + 1))

            href = self.get_value_with_urljoin(hxs, href_selector, url)
            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(href):
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, self.page_selector_dict['title'])
        image_src = self.get_value_response(hxs, self.page_selector_dict['image'])
        content = self.get_all_value_response(hxs, self.page_selector_dict['content'])

        # not found any tags on the detailed page.
        tags = []

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item
