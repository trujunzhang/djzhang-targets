import urlparse

from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import Politicl, CacheItem, WebsiteTypes


class DnaIndiaParser(BaseParser):
    def __init__(self):
        super(DnaIndiaParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        selector = '//*[@class="media-list eventtracker"]'
        links = hxs.xpath(selector).extract()

        count = 1
        for link in links:
            href_selector = "{}/div[{}]/div[2]/a/@href".format(selector, count)
            detailed_href = self.get_value_with_urljoin(hxs, href_selector, url)

            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(detailed_href):
                continue

            item = CacheItem.get_default(url=detailed_href, url_from=WebsiteTypes.dnaindia.value)
            cache_db.save_cache(item, count)

            count += 1

    def parse(self, url, hxs, item_db):
        image_href = self.get_value_response(hxs, '//*[@class=row article-img pos-lead]/img/@src')
        article_selector = '//*[@class=article-content]'
        pass