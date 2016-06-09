from cwharaj.items import Haraj, CacheItem, WebsiteTypes
from cwharaj.parser.base_parser import BaseParser

import time


class MstamlParse(BaseParser):
    def __init__(self):
        super(MstamlParse, self).__init__()

    # Here,we store items from newest to oldest.
    # then fetch the first item from the databse become the oldest.
    def parse_paginate(self, url, hxs, cache_db, history_db):
        links = hxs.xpath('//*[@class="center mb10"]/div')
        count = 1
        for link in links:
            Li_selector = '//*[@class="center mb10"]/div[' + str(count) + ']'

            div_class_selector = '//*[@class="center mb10"]/div[' + str(count) + ']/@class'

            count += 1
            class_name = self.get_value_from_response(hxs, div_class_selector)
            # This div is empty line, such as "<div id="item2072286" class="none"></div>"
            if class_name == "none":
                continue

            href = self.get_value_from_response(hxs, Li_selector + '/*[@class="pb3"]/a[@class="xRight fL1"]/@href', url)

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist(href):
                continue

            model_id = self.get_value_from_response(hxs, Li_selector + '/span[@class="anchor"]/@id')

            item = CacheItem(
                model_id=model_id,
                url_from=WebsiteTypes.opensooq.value,
            )

            cache_db.process_item(href, item)
            # here, must sleep a second.
            time.sleep(1)

    def parse(self, url, hxs):

        _id = ""
        _city = self.get_value_from_response(hxs,
                                             '//*[@class="sellerAddress"]/span[@class="sellerAddressText"]/a/text()', 0)
        _time = self.get_value_from_response(hxs, '//*[@class="postDate fRight"]/text()', 0)
        _title = self.get_value_from_response(hxs, '//*[@class="postTitleCont"]/div/h1/text()', 0)
        _pictures = hxs.xpath('//*[@class="galleryLeftList fLeft"]/ul/li/a/img/@src').extract()
        _subject = ""
        _contact = ""
        _number = ""
        _address = self.get_value_from_response(hxs,
                                                '//*[@class="sellerAddress"]/span[@class="sellerAddressText"]/span/text()',
                                                0)
        _memberName = self.get_value_from_response(hxs, '//*[@class="userDet tableCell vTop"]/strong/a/text()', 0)
        _description = self.get_all_value_from_response(hxs, '//*[@class="postDesc"]/p/text()')
        _section = self.get_value_from_response(hxs, '//*[@class="breadcrumbs"]/li[2]/span/a/text()', 0)

        # Replace "\n","\r"
        _city = _city.strip()
        _time = _time.replace("\n", "").replace("\r", "").strip()
        _title = _title.replace("\n", "").replace("\r", "").strip()
        _address = _address.replace("\n", "").replace("\r", "").strip()
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
