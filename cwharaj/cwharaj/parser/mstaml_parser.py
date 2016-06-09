from cwharaj.items import Haraj, CacheItem, WebsiteTypes
from cwharaj.parser.base_parser import BaseParser

import time


class MstamlParse(BaseParser):
    def __init__(self):
        super(MstamlParse, self).__init__()

    # Here,we store items from newest to oldest.
    # then fetch the first item from the databse become the oldest.
    def parse_paginate(self, url, hxs, cache_db, history_db):
        links = hxs.xpath('//*[@id="gridPostListing"]/li')
        count = 1
        for link in links:
            Li_selector = '//*[@id="gridPostListing"]/li[' + str(count) + ']'
            count += 1

            href = self.get_value_from_response_with_urljoin(hxs,
                                                             Li_selector + '/div/div[@class="rectLiDetails"]/h3/a/@href',
                                                             url)

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist(href):
                continue

            model_id = hxs.xpath(Li_selector + '/div[@class="searchItem"]/@id')[0].extract()
            # u'postList-42229013'
            model_id = model_id.replace("postList-", "")

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
