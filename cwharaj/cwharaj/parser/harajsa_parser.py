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
        _city = ""  # not found
        _time = self.get_value_from_response(hxs,
                                             '//*[@class="boxItem"]/table[1]/tr/td[2]/span/text()')
        _title = self.get_value_from_response(hxs, '//*[@class="titleSection doHighlight"]/text()')

        _pictures = self.get_images_from_noscript(hxs)
        _subject = ""
        _contact = ""
        _number = self.get_value_from_response(hxs,
                                               '//table[@class="dcs"]/tbody/tr[9]/td[2]/text()')
        _address = self.get_value_from_response(hxs,
                                                '//*[@class="boxItem"]/table[3]/tr/td[1]/a/text()')
        _memberName = self.get_value_from_response(hxs,
                                                   '//*[@class="boxItem"]/table[1]/tr/td[1]/b/text()')
        _description = self.get_all_value_from_response(hxs,
                                                        '//*[@class="text linkify linkifyWithImages linkifyWithWasel doHighlight"]/text()')
        _section = self.get_value_from_response(hxs, '//*[@class="boxItem"]/table[2]/tr/td[1]/a/text()')

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
