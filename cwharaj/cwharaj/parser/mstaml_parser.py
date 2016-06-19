from cwharaj.items import Ad, CacheItem, WebsiteTypes
from cwharaj.parser.base_parser import BaseParser

import time
import logging


class MstamlParse(BaseParser):
    def __init__(self):
        super(MstamlParse, self).__init__()

    # Here,we store items from newest to oldest.
    # then fetch the first item from the databse become the oldest.
    def parse_paginate(self, url, hxs, cache_db, history_db):
        links = hxs.xpath('//*[@class="center mb10 "]/div')
        logging.debug("Get rows count from the mstaml: {}.".format(len(links)))

        count = 1
        for link in links:
            Li_selector = '//*[@class="center mb10 "]/div[' + str(count) + ']'
            div_class_selector = '//*[@class="center mb10 "]/div[' + str(count) + ']/@class'

            count += 1

            class_name = self.get_value_from_response(hxs, div_class_selector)
            # This div is empty line, such as "<div id="item2072286" class="none"></div>"
            # This div is empty line, such as "<div id="item2072286" class="clear"></div>"
            # valid div is "class="boxDarkBody dw1 gWhite ui-corner-all mb20 mt20""
            if len(class_name) <= 10:
                logging.debug("ignore the empty line, class name: {}, at {}".format(class_name, count - 1))
                continue

            href = self.get_value_from_response(hxs, Li_selector + '/*[@class="pb3"]/a[@class="xRight fL1"]/@href')

            from cwharaj.utils.crawl_utils import CrawlUtils
            _ID = CrawlUtils.url_parse_id_from_page_url(href, 1)

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist_by_id(_ID):
                logging.debug("  item exist {} on the history database".format(_ID))
                continue

            item = CacheItem(
                ID=_ID,
                url_from=WebsiteTypes.mstaml.value,
            )

            cache_db.process_item(href, item, count)
            # here, must sleep a second.
            # time.sleep(1)

    def parse(self, url, hxs, item_db, phoneNumberSet=None):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.url_parse_id_from_page_url(url, 1)

        _time = self.get_value_from_response(hxs, '//*[@class="boxItem"]/table[1]/tr/td[2]/span/text()')
        _title = self.get_value_from_response(hxs, '//*[@class="titleSection doHighlight"]/text()')

        _pictures = self.get_images_in_selector(hxs, '//noscript')
        _subject = ""
        _contact = ""
        _number = self.get_value_from_response(hxs, '//table[@class="dcs"]/tbody/tr[9]/td[2]/text()')

        _city = self.get_value_from_response(hxs,
                                             '//*[@class="boxDarkBody p1"]/table/tr[2]/td[@class="gH3 xCenter p3 fB"]/text()')
        _address = self.get_value_from_response(hxs, '//*[@class="boxItem"]/table[3]/tr/td[1]/a/text()')

        _memberName = self.get_value_from_response(hxs, '//*[@class="boxItem"]/table[1]/tr/td[1]/b/text()')
        _description = self.get_all_value_from_response(hxs,
                                                        '//*[@class="text linkify linkifyWithImages linkifyWithWasel doHighlight"]/text()')
        _section = self.get_section(hxs, '//div[@class="pageRight"]/h1[@class="titlePage"]/a/text()')

        # Replace "\n","\r"
        _city = _city.replace("\n", "").replace("\r", "").strip()

        item = Ad(
            url=url,
            ID=_ID,
            city=_city,
            time=_time,
            title=_title,
            pictures=_pictures,
            subject=_subject,
            contact=_contact,
            number=_number,

            address=_address,
            memberName=_memberName,
            description=_description,
            section=_section,

            url_from=WebsiteTypes.mstaml.value
        )

        return item

    def get_section(self, hxs, selector):
        _As = hxs.xpath(selector).extract()

        sections = []
        for a in _As:
            sections.append(a.encode('utf-8'))

        return ",".join(sections)
