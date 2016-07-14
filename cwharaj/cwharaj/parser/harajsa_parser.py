# -*- coding: utf-8 -*-

import logging

import time

from cwharaj.items import Ad, CacheItem, WebsiteTypes, City, Member
from cwharaj.parser.base_parser import BaseParser
from cwharaj.parser.utils.harajs_comments import HarajsComments
from cwharaj.parser.utils.harajs_section import HarajsSection
from cwharaj.parser.utils.timer_util import TimerUtil


class HarajSaParse(BaseParser):
    def __init__(self):
        self.url_from = WebsiteTypes.harajsa.value
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
                # logging.debug("ignore the table title, at {}".format(count - 1))
                continue

            href = self.get_value_response(hxs, Li_selector + '/td[2]/a/@href')

            from cwharaj.utils.crawl_utils import CrawlUtils
            _ID = CrawlUtils.get_model_id_from_page_url(href, 1)

            # If the link already exist on the history database,ignore it.
            if history_db.check_history_exist(_ID):
                # logging.debug("  item exist {} on the history database".format(_ID))
                continue

            item = CacheItem.get_default(model_id=_ID, url=href, url_from=self.url_from)
            cache_db.save_cache(item, count)
            # here, must sleep a second.
            # time.sleep(1)

    def parse(self, url, hxs, item_db):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.get_model_id_from_page_url(url, 1)

        # comment ad_div
        _ads_title = self.get_value_response(hxs, '//*[@itemprop="name"]/text()').replace('» ', '')
        _ads_city = self.get_value_response(hxs, '//*[@class=" comment_header"]/*[@class="city-head"]/text()')
        _published_data = self.get_published_date(self.get_value_response(hxs, '//*[@class=" comment_header"]'))
        # "_published_data' is the same as '_time_added'
        _time_added = TimerUtil().get_time_for_harajs(_published_data)
        _last_updated_ad = _time_added
        _memberName = self.get_value_response(hxs, '//*[@class=" comment_header"]/*[@class="username"]/text()')

        # ad_low
        def filter_for_image(src):
            if 'haraj.com.sa' in src:
                return True

            logging.debug("  invalide picture url from the haraj.sa, {}".format(src))
            return False

        _image_link = self.get_images_in_selector(hxs, '//*[@itemprop="description"]', filter_method=filter_for_image)
        _ads_body = self.get_all_value_response(hxs, '//*[@itemprop="description"]/text()')
        _ads_contact = self.get_value_response(hxs, '//*[@class="contact"]/strong/a/text()')

        # sections
        _sections = self.get_section(self.get_value_response(hxs, '//*[@class="ad_low"]'))
        _section_item = HarajsSection(_sections, item_db).get_section_item_for_harajsa()

        # Fixing the empty page.
        if _ads_title == '' and _ads_body == '':
            logging.debug("  The empty page on the harajsa")
            return {"id_ads": _ID}

        # TODO: djzhang, how to parse the sections when length is more then 3.
        if len(_sections) > 3:
            logging.debug("  The sections length is more than 3 on the harajsa")
            return {"id_ads": _ID}

        # Replace "\n","\r"
        _ads_body = _ads_body.replace("\r", "").strip()

        # ====
        # Save to relative database
        # ====
        _city_id = item_db.save_city(City.get_default(_ads_city))

        _His_announcement_id = item_db.save_member(Member.get_default(_memberName))

        item = Ad.get_default(
            section_item=_section_item,
            ads_title=_ads_title,
            city_id=_city_id,
            ads_contact=_ads_contact,
            ads_body=_ads_body,
            image_link=_image_link,
            His_announcement_id=_His_announcement_id,
            url_from=self.url_from,
            Time_added=_time_added, Last_updated_Ad=_last_updated_ad,
            type_ads_or=1, _close_ads=0
        )

        id_ads = item_db.save_ad(item)

        HarajsComments(self, item_db, id_ads).save_for_harajs(hxs)

        return item

    def get_section(self, section_panel):
        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(section_panel)

        _As = soup.findAll('a', {'itemprop': 'url'})
        sections = []
        for a in _As:
            sections.append(a.text.replace("\n", "").replace("\r", "").strip().encode('utf-8'))

        return sections

    def get_published_date(self, comment_header_string):
        """Because the published date is not contained by any tag.
        So we can't use xpath to select it."""

        from BeautifulSoup import BeautifulSoup
        from BeautifulSoup import Tag
        soup = BeautifulSoup(comment_header_string)
        _list = soup.findAll('div', {"class": " comment_header"})
        if len(_list) == 1:
            header = _list[0]
            _header_content = header.contents
            for _content in _header_content:
                if isinstance(_content, Tag):
                    continue
                _content = _content.encode('utf-8')
                _content = _content.replace('\r', '').replace('\n', '').replace('\t', '').replace('›', '').strip()
                _content = _content.replace("\xc2\xa0", "").strip()
                if len(_content) > 0:
                    return _content

        return ""
