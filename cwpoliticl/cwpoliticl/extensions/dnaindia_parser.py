import urlparse

from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.items import Politicl, CacheItem, WebsiteTypes


class DnaIndiaParser(BaseParser):
    def __init__(self):
        super(DnaIndiaParser, self).__init__()

    def parse_paginate(self, url, hxs, cache_db, history_db):
        selector = '//*[@class="media-list eventtracker"]'
        links = hxs.select(selector).extract()

        count = 1
        for link in links:
            href_selector = "{}/div[{}]/div[2]/a/@href".format(selector, count)
            # '//*[@id="adswrapper"]/table/tr[' + str(count) + ']'

            detailed_href = self.get_value_with_urljoin(hxs, href_selector, url)

            count += 1

            # If the link already exist on the history database,ignore it.
            if history_db.check_history_exist(href_selector):
                # logging.debug("  item exist {} on the history database".format(_ID))
                continue

            item = CacheItem.get_default(model_id=_ID, url=href_selector, url_from=WebsiteTypes.dnaindia.value)
            cache_db.save_cache(item, count)

    def parse(self, url, hxs, item_db):

        cluster = self.get_value_from_response(hxs, '// a[ @class = "document-subtitle primary"]/@href', 0)
        cluster = urlparse.urljoin(url, cluster.strip())

        category = self.get_value_from_response(hxs, '// a[ @class = "document-subtitle category"]/@href', 0)
        category = urlparse.urljoin(url, category.strip())

        price = self.get_value_from_response(hxs,
                                             '//div[@class="details-actions"]/span/span/button[@data-uitype="200"]/span[2]/text()',
                                             0)

        _thumbnail_url = self.get_value_from_response(hxs, '//div[@class="cover-container"]/img/@src', 0)
        _scheme = urlparse.urlparse(_thumbnail_url).scheme
        thumbnail = _thumbnail_url
        if not _scheme:
            thumbnail = "https:" + _thumbnail_url

        title = self.get_value_from_response(hxs,
                                             '//div[@class="info-container"]/div[@class="document-title"]/div[@class="id-app-title"]/text()',
                                             0)
        reviewsNum = self.get_value_from_response(hxs, '//span[@class="reviews-num"]/text()', 0)

        datePublished = self.get_value_from_response(hxs, '//div[@itemprop="datePublished"]/text()', 0)

        website = ""
        email = ""
        linksSelect = '//a[@class ="dev-link"]'
        links = hxs.xpath(linksSelect)
        count = 0
        for link in links:
            _href = link.xpath(linksSelect + '/@href')[count].extract()
            if "mailto" in _href:
                email = self.get_value_from_response(hxs, linksSelect + '/@href', count).replace("mailto:", "")
            elif "https://www.google.com" in _href:
                website = self.get_value_from_response(hxs, linksSelect + '/@href', count)
            count += 1

        address = self.get_value_from_response(hxs, '//div[@class="content physical-address"]/text()', 0).replace("\n",
                                                                                                                  "")

        item = Politicl(
            url=url,
            cluster=cluster,
            category=category,
            price=price,
            thumbnail=thumbnail,
            title=title,
            reviewsNum=reviewsNum,
            datePublished=datePublished,
            website=website,
            email=email,
            address=address,
        )

        return item
