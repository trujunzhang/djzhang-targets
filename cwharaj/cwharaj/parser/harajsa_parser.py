# -*- coding: utf-8 -*-

from cwharaj.items import Haraj, CacheItem, WebsiteTypes
from cwharaj.parser.base_parser import BaseParser

import time
import logging


class HarajSaParse(BaseParser):
    def __init__(self):
        super(HarajSaParse, self).__init__()

    # Here,we store items from newest to oldest.
    # then fetch the first item from the databse become the oldest.
    def parse_paginate(self, url, hxs, cache_db, history_db):
        links = hxs.xpath('//*[@id="adswrapper"]/table/tr')
        logging.debug("Get rows count from the harajsa: {}".format(len(links)))

        count = 1
        for link in links:
            Li_selector = '//*[@id="adswrapper"]/table/tr[' + str(count) + ']'

            count += 1

            td_count = len(hxs.xpath(Li_selector + "/td"))
            if td_count == 0:  # ignore the table title row(only have <th>s)
                continue

            _ID = self.get_value_from_response(hxs, Li_selector + '/*[@class="ads_id"]/@id')

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist_by_id(_ID):
                logging.debug("  item exist {} on the history database".format(_ID))
                continue

            href = self.get_value_from_response(hxs, Li_selector + '/td[2]/a/@href')

            item = CacheItem(
                ID=_ID,
                url_from=WebsiteTypes.harajsa.value,
            )

            cache_db.process_item(href, item, count)
            # here, must sleep a second.
            # time.sleep(1)

    def parse(self, url, hxs):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.url_parse_id_from_page_url(url, 1)

        _title = self.get_value_from_response(hxs, '//*[@itemprop="name"]/text()')
        _memberName = self.get_value_from_response(hxs, '//*[@class=" comment_header"]/*[@class="username"]/text()')

        comment_header_string = self.get_value_from_response(hxs, '//*[@class=" comment_header"]')
        _time = self.get_published_date(comment_header_string)

        _city = self.get_value_from_response(hxs, '//*[@class=" comment_header"]/*[@class="city-head"]/text()')

        _pictures = self.get_images_in_selector(hxs, '//*[@itemprop="description"]')
        _subject = ""
        _contact = ""
        _number = self.get_value_from_response(hxs, '//*[@class="contact"]/strong/a/text()')
        _address = self.get_value_from_response(hxs,
                                                '//*[@class="boxItem"]/table[3]/tr/td[1]/a/text()')  # ??
        _description = self.get_all_value_from_response(hxs, '//*[@itemprop="description"]/text()')

        _section = self.get_section(self.get_value_from_response(hxs, '//*[@class="ad_low"]'))

        # Replace "\n","\r"
        _description = _description.replace("\r", "").strip()
        _memberName = _memberName.strip()

        item = Haraj(
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
            section=_section
        )

        return item

    def get_section(self, section_panel):
        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(section_panel)

        _As = soup.findAll('a', {'itemprop': 'url'})
        sections = []
        for a in _As:
            sections.append(a.text)

        return sections
