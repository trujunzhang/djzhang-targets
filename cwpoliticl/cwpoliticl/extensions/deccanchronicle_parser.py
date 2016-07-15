from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class DeccanchronicleParser(BaseParser):
    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.deccanchronicle.value
        super(DeccanchronicleParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@id="story_container"]/*[@class="pagedno"]/*[@class="story-list "]'
        self._parse_block_for_pagination(hxs, cache_db, history_db, select_block)

    def _parse_block_for_pagination(self, hxs, cache_db, history_db, select_block):
        links = hxs.xpath(select_block).extract()

        count = 1
        for href in links:
            href_selector = '{}[{}]/*[@class="storybox"]/*[@class="storyimg"]/a/@href'.format(select_block, count)
            thumbnail_selector = '{}[{}]/*[@class="storybox"]/*[@class="storyimg"]/a/img/@src'.format(
                select_block, count)

            count += 1

            href = self.get_value_response(hxs, href_selector)
            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(href):
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, '//*[@id="header-story"]/*[@class="header-inner"]/h1/text()')
        image_src = self._get_image_src(hxs, '//*[@id="header-story"]/@style')

        # from cwpoliticl.scraped_websites import content_seperator
        # lines = [self.get_value_response(hxs, '//*[@id="p_1"]/text()'), self.get_value_response(hxs, '//*[@id="p_2"]/text()')]
        # content = content_seperator.join(lines)

        content = self.get_all_value_response(hxs, '//*[@class="mediumcontent"]/p/text()')

        tags = hxs.xpath(
            '//*[@class="bottom-full"]/*[@class="bottom_cont_tg"]/*[@class="story-middle"]/*[@id="taglist"]/a/text()').extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item

    def _get_image_src(self, hxs, selector):
        style = hxs.xpath(selector).extract()
        image_style = self.get_value_response(hxs, selector)

        split = image_style.split("'")
        if len(split) >= 2:
            return split[1]

        return ''
