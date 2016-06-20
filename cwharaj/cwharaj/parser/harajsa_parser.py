# -*- coding: utf-8 -*-

from cwharaj.items import Ad, CacheItem, WebsiteTypes, City, Member
from cwharaj.parser.base_parser import BaseParser

import time
import logging
from datetime import datetime

from cwharaj.parser.section.harajs_section import HarajsSection


class HarajSaParse(BaseParser):
    def __init__(self):
        super(HarajSaParse, self).__init__()
        self.section_mgr = HarajsSection()

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
                logging.debug("ignore the table title, at {}".format(count - 1))
                continue

            href = self.get_value_from_response(hxs, Li_selector + '/td[2]/a/@href')

            from cwharaj.utils.crawl_utils import CrawlUtils
            _ID = CrawlUtils.url_parse_id_from_page_url(href, 1)

            # If the link already exist on the history database,ignore it.
            if history_db.check_exist_by_id(_ID):
                logging.debug("  item exist {} on the history database".format(_ID))
                continue

            item = CacheItem(
                ID=_ID,
                url_from=WebsiteTypes.harajsa.value,
            )

            cache_db.process_item(href, item, count)
            # here, must sleep a second.
            # time.sleep(1)

    def parse(self, url, hxs, item_db, phoneNumberSet=None):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.url_parse_id_from_page_url(url, 1)

        # comment ad_div
        _ads_title = self.get_value_from_response(hxs, '//*[@itemprop="name"]/text()').replace('» ', '')
        _ads_city = self.get_value_from_response(hxs, '//*[@class=" comment_header"]/*[@class="city-head"]/text()')
        # _published_data = self.get_published_date(self.get_value_from_response(hxs, '//*[@class=" comment_header"]'))
        # "_published_data' is the same as '_time_added'
        _time_added = '12345678901'  # ???
        _memberName = self.get_value_from_response(hxs, '//*[@class=" comment_header"]/*[@class="username"]/text()')
        _last_updated_ad = '23456789012'  # ???

        # ad_low
        def filter_for_image(src):
            if 'haraj.com.sa' in src:
                return True

            logging.debug("  invalide picture url from the haraj.sa, {}".format(src))
            return False

        _image_link = self.get_images_in_selector(hxs, '//*[@itemprop="description"]', filter_method=filter_for_image)
        _ads_body = self.get_all_value_from_response(hxs, '//*[@itemprop="description"]/text()')
        _ads_contact = self.get_value_from_response(hxs, '//*[@class="contact"]/strong/a/text()')

        # sections
        _sections = self.get_section(self.get_value_from_response(hxs, '//*[@class="ad_low"]'))
        _section_item = self.section_mgr.get_section_item(_sections)

        # comment comment_div
        _subject = ""
        _address = ""  # not found

        # Replace "\n","\r"
        _ads_body = _ads_body.replace("\r", "").strip()
        _memberName = _memberName.strip()

        city = City(
            text=_ads_city
        )
        _city_id = item_db.save_city(city)

        member = Member(
            username=_memberName,
            password="",
            groupnumber="",
            email="",
            timeregister="",
            member_code="",
            documentingmobile="",
            Documentingemail="",
            phone="",
            sendtime="",
            active="",
            now="",
            Lastactivity="",
            subscribe_1="",
            subscribe_2="",
            subscribe_3="",
            The_pay_commission="",
        )
        _His_announcement = item_db.save_member(member)

        item = Ad(
            ads_title=_ads_title,
            ads_city=_city_id,
            ads_tags_R=_section_item._ads_tags_R,
            ads_tags_F=_section_item._ads_tags_F,
            ads_tags_FF=_section_item._ads_tags_FF,
            ads_contact=_ads_contact,
            ads_body=_ads_body,
            image_link=_image_link,
            # type_ads_other_final=_type_ads_other_final,
            # un_model=_un_model,
            status=1,
            fixing=0,
            Time_added=_time_added,
            His_announcement=_His_announcement,
            # type_ads_or=_type_ads_or,
            # close_ads=_close_ads,
            Last_updated_Ad=_last_updated_ad,
            closecomment=0,
            fixed_home=0,
            fixed_tub=0,
            fixed_sec=0,
            fixed_sec2=0,
            fixed_sec3=0,
            timer_mazad=0,
        )

        return item

    def get_section(self, section_panel):
        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(section_panel)

        _As = soup.findAll('a', {'itemprop': 'url'})
        sections = []
        for a in _As:
            sections.append(a.text.replace("\n", "").replace("\r", "").strip().encode('utf-8'))

        return ",".join(sections)

    def get_published_date(self, comment_header_string):
        """Because the published date is not contained by any tag.
        So we can't use xpath to select it."""

        published_date = ""

        # step 1: remove class called "comment_header"
        comment_header_string = comment_header_string.replace('<div class=" comment_header">', '')
        comment_header_string = comment_header_string.replace("\n", "").replace("\r", "")

        # step 2: split it by "<br>", so we can get the first block.
        blocks = comment_header_string.split('<br>')

        # Basically, the length of blocks must be 3.
        if len(blocks) == 3:
            first_block = blocks[0]

            # Finally, remove all <a> blocks, that the result is the published date string.
            from BeautifulSoup import BeautifulSoup
            soup = BeautifulSoup(first_block)

            _As = soup.findAll('a')

            for a in _As:
                a.replaceWith('')

            value = soup.prettify().replace("\n", "").replace("\r", "")
            # Here, no need encode the value.
            published_date = value

        return published_date
