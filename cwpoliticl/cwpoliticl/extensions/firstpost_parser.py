from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WDPost


class FirstPostParser(BaseParser):
    def __init__(self):
        from cwpoliticl.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.firstpost.value
        super(FirstPostParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        select_block = '//*[@class="artCol top_stories"]/ul/li'
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, select_block)

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, select_block):
        links = hxs.xpath(select_block).extract()

        count = 1
        for href in links:
            href_selector = '{}[{}]/a/@href'.format(select_block, count)
            thumbnail_selector = '{}[{}]/a/img/@data-original'.format(select_block, count)

            count += 1

            href = self.get_value_response(hxs, href_selector)
            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(href):
                continue

            thumbnail_src = self.get_value_response(hxs, thumbnail_selector)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, '//*[@class="contentWarp"]/*[@class="articleTop"]/div/h1/text()')
        image_src = self.get_value_response(hxs,
                                            '//*[@class="artWarp"]/*[@itemprop="articleBody"]/*[@class="wp-caption alignleft"]/img/@@data-original')

        content = self._get_all_value_from_beautifulsoup(hxs, '//*[@class="artWarp"]/*[@itemprop="articleBody"]')

        tags = hxs.xpath('//*[@class="artTps"]/div/p[2]/a/text()').extract()

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
