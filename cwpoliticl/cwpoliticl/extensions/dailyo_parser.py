from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class DailyoParser(BaseParser):
    page_selector_dict = {
        "title": '//*[@id="header-story"]/*[@class="header-inner"]/h1/text()',
        "image": '//*[@id="header-story"]/@style',
        "content": '//*[@class="mediumcontent"]/p/text()',
        "tags": '//*[@class="bottom-full"]/*[@class="bottom_cont_tg"]/*[@class="story-middle"]/*[@id="taglist"]/a/text()',
    }

    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.dailyo.value
        super(DailyoParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@id="story_container"]/*[@class="pagedno"]/*[@class="story-list "]'
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, select_block)

        select_block = '//*[@id="story_container"]/*[@class="pagedno"]/*[@class="story-list graybg"]'
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, select_block)

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, select_block):
        links = hxs.xpath(select_block).extract()

        for idx, link in enumerate(links):
            href_selector = '{}[{}]/*[@class="storybox"]/*[@class="storyimg"]/a/@href'.format(select_block, (idx + 1))
            thumbnail_selector = '{}[{}]/*[@class="storybox"]/*[@class="storyimg"]/a/img/@src'.format(
                select_block, (idx + 1))

            href = self.get_value_response(hxs, href_selector)
            if history_db.check_history_exist(href):  # If the link already exist on the history database, ignore it.
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, self.page_selector_dict['title'])
        image_src = self.get_image_src_from_bg(hxs, self.page_selector_dict['image'])
        content = self.get_all_value_response(hxs, self.page_selector_dict['content'])
        tags = hxs.xpath(self.page_selector_dict['tags']).extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item


