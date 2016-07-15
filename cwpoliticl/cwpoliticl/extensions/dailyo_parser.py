from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class DailyoParser(BaseParser):
    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.theviewspaper.value
        super(DailyoParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@id="story_container"]/*[@class="pagedno"]/*[@class="story-list "]'
        self._parse_block_for_pagination(hxs, cache_db, history_db, select_block)

        select_block = '//*[@id="story_container"]/*[@class="pagedno"]/*[@class="story-list graybg"]'
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
        title = self.get_value_response(hxs, '//*[@class="entry-content"]/*[@class="entry-header"]/h2/a/text()')
        image_src = self._get_image(hxs, '//*[@class="entry-content"]/*[@class="content"]/p[1]/img/@srcset')
        content = self.get_all_value_response(hxs, '//*[@class="entry-content"]/*[@class="content"]/p',
                                              max_len=2, sperator='\n' + '\n', start_index=2)

        tags = hxs.xpath(
            '//*[@class="entry-content"]/*[@class="post-meta"]/*[@class="categories-links"]/a/text()').extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item

    def _get_image(self, hxs, selector):
        image = self.get_value_response(hxs, selector)
        srcset = image.split(',')
        if len(srcset) > 0:
            src_format = srcset[len(srcset) - 1].strip()
            src_split = src_format.split(' ')
            if len(src_split) == 2:
                return src_split[0]

        return ""
