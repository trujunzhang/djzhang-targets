from cwharaj.items import Haraj, CacheItem, WebsiteTypes
from cwharaj.parser.base_parser import BaseParser

import time
import logging


class OpensooqParse(BaseParser):
    def __init__(self):
        super(OpensooqParse, self).__init__()

    # Here,we store items from newest to oldest.
    # then fetch the first item from the databse become the oldest.
    def parse_paginate(self, url, hxs, cache_db, history_db):
        links = hxs.xpath('//*[@id="gridPostListing"]/li')
        logging.debug("Get rows count from the opensooq: {}.".format(len(links)))

        count = 1
        for link in links:
            Li_selector = '//*[@id="gridPostListing"]/li[' + str(count) + ']'

            count += 1

            href = self.get_value_from_response_with_urljoin(hxs,
                                                             Li_selector + '/div/div[@class="rectLiDetails"]/h3/a/@href',
                                                             url)

            from cwharaj.utils.crawl_utils import CrawlUtils
            _ID = CrawlUtils.url_parse_id_from_page_url(href, 3)

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist_by_id(_ID):
                logging.debug("  item exist {} on the history database".format(_ID))
                continue

            item = CacheItem(
                ID=_ID,
                url_from=WebsiteTypes.opensooq.value,
            )

            cache_db.process_item(href, item, count)
            # here, must sleep a second.
            # time.sleep(1)

    def parse(self, url, hxs, phoneNumberSet=None):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.url_parse_id_from_page_url(url, 3)

        _city = self.get_value_from_response(hxs,
                                             '//*[@class="sellerAddress"]/span[@class="sellerAddressText"]/a/text()')
        _time = self.get_value_from_response(hxs, '//*[@class="postDate fRight"]/text()')
        _title = self.get_value_from_response(hxs, '//*[@class="postTitleCont"]/div/h1/text()')
        _pictures = self.get_pictures(hxs, '//*[@class="galleryLeftList fLeft"]/ul/li/a/img/@src')
        _subject = ""
        _contact = ""
        _number = ""
        _address = self.get_value_from_response(hxs,
                                                '//*[@class="sellerAddress"]/span[@class="sellerAddressText"]/span/text()')
        _memberName = self.get_value_from_response(hxs, '//*[@class="userDet tableCell vTop"]/strong/a/text()')
        _description = self.get_all_value_from_response(hxs, '//*[@class="postDesc"]/p/text()')
        _section = self.get_section(self.get_value_from_response(hxs, '//*[@class="breadcrumbs"]'))

        # Specially, parse phone_number only for opensooq
        _phone_data_id = self.get_value_from_response(hxs, '//*[@class="phoneNumber table getPhoneNumber"]/@data-id')
        _phone_data_type = self.get_value_from_response(hxs,
                                                        '//*[@class="phoneNumber table getPhoneNumber"]/@data-type')

        # Replace "\n","\r"
        _city = _city.strip()
        _time = _time.replace("\n", "").replace("\r", "").strip()
        _title = _title.replace("\n", "").replace("\r", "").strip()
        _address = _address.replace("\n", "").replace("\r", "").strip()
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
            section=_section,

            url_from=WebsiteTypes.opensooq.value
        )

        phone_Number_Item = phoneNumberSet.get_phone_number_item(_ID)
        if phone_Number_Item:
            phone_Number_Item.phone_data_id = _phone_data_id
            phone_Number_Item.phone_data_type = _phone_data_type
            phone_Number_Item.scrapy_item = item

        return phone_Number_Item

    def get_pictures(self, hxs, selector):
        _pictures = hxs.xpath(selector).extract()
        list = []
        for picture in _pictures:
            list.append(picture.replace('75x75', '563x400'))

        return list

    def get_section(self, section_panel):
        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(section_panel)

        _As = soup.findAll('a', {'property': 'v:title'})
        sections = []
        for a in _As:
            sections.append(a.text.replace("\n", "").replace("\r", "").strip())

        return sections
