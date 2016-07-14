from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import CacheItem, WebsiteTypes, WDPost


class TheViewsPaperParser(BaseParser):
    def __init__(self):
        self.url_from = WebsiteTypes.theviewspaper.value
        super(TheViewsPaperParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        selector = '//*[@class="container"]/*[@class="row"]/*[@class="col-md-8"]/article/a/@href'
        links = hxs.xpath(selector).extract()  # Type: List['unicode']

        for href in links:
            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(href):
                continue

            cache_db.save_cache(CacheItem.get_default(url=href, url_from=self.url_from))

    def parse(self, url, hxs, wd_rpc, thumbnail_url, access_denied_cookie):
        title = self.get_value_response(hxs, '//*[@class="entry-content"]/*[@class="entry-header"]/h2/a/text()')
        image_src = self._get_image(hxs, '//*[@class="entry-content"]/*[@class="content"]/p[1]/img/@srcset')
        content = self.get_all_value_response(hxs, '//*[@class="entry-content"]/*[@class="content"]/p',
                                              max_len=2, sperator='\n' + '\n', start_index=2)

        tags = hxs.xpath(
            '//*[@class="entry-content"]/*[@class="post-meta"]/*[@class="categories-links"]/a/text()').extract()

        item = WDPost(url, self.url_from, title, image_src, thumbnail_url, content, tags, access_denied_cookie)

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
