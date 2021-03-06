from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class FirstPostParser(BaseParser):
    page_selector_dict = {
        "title": '//*[@class="contentWarp"]/*[@class="articleTop"]/div/h1/text()',
        "image": '//*[@class="artWarp"]/*[@itemprop="articleBody"]/*[@class="wp-caption alignleft"]/img/@data-original',
        "content": '//*[@class="artWarp"]/*[@itemprop="articleBody"]',
        "tags": '//*[@class="artTps"]/div/p[2]/a/text()',
    }

    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.firstpost.value
        super(FirstPostParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@class="artCol top_stories"]/ul/li'
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, select_block)

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, select_block):
        links = hxs.xpath(select_block).extract()

        for idx, link in enumerate(links):
            href_selector = '{}[{}]/a/@href'.format(select_block, (idx + 1))
            thumbnail_selector = '{}[{}]/a/img/@data-original'.format(select_block, (idx + 1))

            href = self.get_value_response(hxs, href_selector)
            if history_db.check_history_exist(href):  # If the link already exist on the history database, ignore it.
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, self.page_selector_dict['title'])
        image_src = self.get_value_response(hxs, self.page_selector_dict['image'])
        content = self._get_all_value_from_beautifulsoup(hxs, self.page_selector_dict['content'])
        tags = hxs.xpath(self.page_selector_dict['tags']).extract()

        item = WDPost.get_default(url, self.url_from, title, image_src, thumbnail_url, content, tags,
                                  access_denied_cookie=access_denied_cookie)

        post_id = wd_rpc.post_to_wd(item)

        return item

    def _get_all_value_from_beautifulsoup(self, hxs, block, max_len=2, seperator=None):
        if not seperator:
            from cwpoliticl.scraped_websites import content_seperator
            seperator = content_seperator

        article_content = self.get_value_response(hxs, block)

        from BeautifulSoup import BeautifulSoup
        c = BeautifulSoup(article_content)

        lines = []
        # filter '<p class="wp-caption-text">File image of raj babbar. CNN-News18</p>' and all empty lines.
        p_tags = c.findAll('p')

        for idx, p_tag in enumerate(p_tags):
            text = p_tag.text
            if len(p_tags[idx].attrs):  # attrs contains 'class' that is image's title, ignore it.
                continue
            if not text:  # the empty line, ignore it
                continue

            if len(lines) >= max_len:
                break

            lines.append(text)

        return seperator.join(lines)
