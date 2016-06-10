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

            href = self.get_value_from_response(hxs, Li_selector + '/td[2]/a/@href')

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist(href):
                logging.debug("  item exist {} on the history database".format(href))
                continue

            model_id = self.get_value_from_response(hxs, Li_selector + '/*[@class="ads_id"]/@id')

            item = CacheItem(
                model_id=model_id,
                url_from=WebsiteTypes.harajsa.value,
            )

            cache_db.process_item(href, item, count)
            # here, must sleep a second.
            time.sleep(1)

    def parse(self, url, hxs):
        _id = ""

        _title = self.get_value_from_response(hxs, '//*[@itemprop="name"]/text()')

        comment_header_string = self.get_value_from_response(hxs, '//*[@class=" comment_header"]')

        blocks = comment_header_string.split('<br>')

        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(comment_header_string)

        fonts = soup.findAll('font')

        _memberName = self.get_value_from_response(hxs, '//*[@class=" comment_header"]/*[@class="username"]/text()')
        _time = self.get_value_from_response(hxs, '//*[@class=" comment_header"]')
        _city = self.get_value_from_response(hxs, '//*[@class=" comment_header"]/*[@class="city-head"]/text()')

        _pictures = self.get_images_from_noscript(hxs, '//*[@itemprop="description"]')
        _subject = ""
        _contact = ""
        _number = self.get_value_from_response(hxs, '//*[@class="contact"]/strong/a/text()')

        _address = self.get_value_from_response(hxs,
                                                '//*[@class="boxItem"]/table[3]/tr/td[1]/a/text()')

        _description = self.get_all_value_from_response(hxs, '//*[@itemprop="description"]/text()')

        _section = self.get_value_from_response(hxs, '//*[@class="boxItem"]/table[2]/tr/td[1]/a/text()')

        # Replace "\n","\r"
        _description = _description.replace("\r", "").strip()
        _memberName = _memberName.strip()

        item = Haraj(
            url=url,
            ID=_id,
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