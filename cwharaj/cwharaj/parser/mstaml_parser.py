from cwharaj.items import Haraj, CacheItem, WebsiteTypes
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
            if class_name == "none":
                continue

            # hxs.xpath('//*[@class="center mb10 "]/div[1]/*[@class="pb3"]/a[@class="xRight fL1"]/@href')
            href = self.get_value_from_response(hxs, Li_selector + '/*[@class="pb3"]/a[@class="xRight fL1"]/@href')

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist(href):
                logging.debug("  item exist {} on the history database".format(href))
                continue

            model_id = self.get_value_from_response(hxs, Li_selector + '/span[@class="anchor"]/@id')

            item = CacheItem(
                model_id=model_id,
                url_from=WebsiteTypes.mstaml.value,
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
