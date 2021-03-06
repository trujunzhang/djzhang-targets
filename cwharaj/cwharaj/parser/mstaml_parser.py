# coding=utf-8
import logging

from cwharaj.items import Ad, CacheItem, City, Member
from cwharaj.parser.base_parser import BaseParser
from cwharaj.parser.utils.harajs_section import HarajsSection
from cwharaj.parser.utils.timer_util import TimerUtil


class MstamlParse(BaseParser):
    def __init__(self):
        from cwharaj.scraped_websites import WebsiteTypes
        self.url_from = WebsiteTypes.mstaml.value
        super(MstamlParse, self).__init__()

    # Here,we store items from newest to oldest.
    # then fetch the first item from the databse become the oldest.
    def parse_paginate(self, url, hxs, cache_db, history_db):
        links = hxs.xpath('//*[@class="center mb10 "]/div')
        logging.debug("Get rows count from the mstaml: {}.".format(len(links)))

        for idx, link in enumerate(links):
            Li_selector = '//*[@class="center mb10 "]/div[' + str(idx + 1) + ']'
            div_class_selector = '//*[@class="center mb10 "]/div[' + str(idx + 1) + ']/@class'

            class_name = self.get_value_response(hxs, div_class_selector)
            # This div is empty line, such as "<div id="item2072286" class="none"></div>"
            # This div is empty line, such as "<div id="item2072286" class="clear"></div>"
            # valid div is "class="boxDarkBody dw1 gWhite ui-corner-all mb20 mt20""
            if len(class_name) <= 10:
                # logging.debug("ignore the empty line, class name: {}, at {}".format(class_name, count - 1))
                continue

            href = self.get_value_response(hxs, Li_selector + '/*[@class="pb3"]/a[@class="xRight fL1"]/@href')

            from cwharaj.utils.crawl_utils import CrawlUtils
            _ID = CrawlUtils.get_model_id_by_url_from(href, self.url_from)

            # If the link already exist on the history database,ignore it.
            if history_db.check_history_exist(_ID):
                # logging.debug("  item exist {} on the history database".format(_ID))
                continue

            item = CacheItem.get_default(model_id=_ID, url=href, url_from=self.url_from)
            cache_db.save_cache(item, idx)
            # here, must sleep a second.
            # time.sleep(1)

    def parse(self, url, hxs, item_db):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.get_model_id_by_url_from(url, self.url_from)

        # AD
        _ads_title = self.get_value_response(hxs, '//*[@class="titleSection doHighlight"]/text()')
        _time_added = self.get_value_response(hxs, '//*[@class="boxItem"]/table[1]/tr/td[2]/span/text()')
        _last_updated_ad = self.get_value_response(hxs, '//*[@class="boxItem"]/table[2]/tr/td[2]/span/text()')
        _time_added = TimerUtil().get_time_for_mstaml(_time_added)
        _last_updated_ad = TimerUtil().get_time_for_mstaml(_last_updated_ad)
        _image_link = self.get_images_in_selector(hxs, '//noscript')
        _ads_body = self.get_all_value_response(hxs,
                                                '//*[@class="text linkify linkifyWithImages linkifyWithWasel doHighlight"]/text()')

        # Member(boxItem)
        _memberName = self.get_value_response(hxs, '//table[@class="dcs"]/tr[1]/td/text()')
        _ads_city = self.get_city(hxs)
        _member_email = self.get_value_response(hxs, '//table[@class="dcs"]/tr[8]/td[2]/span/@title')
        _member_phone = self.get_value_response(hxs, '//table[@class="dcs"]/tr[10]/td[2]/span/@title')

        # Sections
        _sections = self.get_section(hxs, '//div[@class="pageRight"]/h1[@class="titlePage"]/a/text()')
        _section_item = HarajsSection(_sections, item_db).get_section_item_for_mstaml()

        # Fixing the empty page.
        if _ads_title == '' and _ads_body == '':
            logging.debug("  The empty page on the mstaml")
            return {"id_ads": _ID}

        # ====
        # Save to relative database
        # ====
        _city_id = item_db.save_city(City.get_default(_ads_city))

        _His_announcement_id = item_db.save_member(
            Member.get_default(user_name=_memberName, email=_member_email, phone=_member_phone))

        item = Ad.get_default(
            section_item=_section_item,
            ads_title=_ads_title,
            city_id=_city_id,
            ads_contact=_member_phone,
            ads_body=_ads_body,
            image_link=_image_link,
            His_announcement_id=_His_announcement_id,
            url_from=self.url_from,
            Time_added=_time_added, Last_updated_Ad=_last_updated_ad,
            type_ads_or=1, _close_ads=0
        )

        id_ads = item_db.save_ad(item)

        # mstaml no comments found.
        # ignore parsing the comments.

        return item

    def get_section(self, hxs, selector):
        _As = hxs.xpath(selector).extract()

        sections = []
        for a in _As:
            sections.append(a.encode('utf-8'))

        return sections

    def get_city(self, hxs):
        """
        Parseing _ads_city is like "السعودية - الرياض",
        Then split to array, normally the city is index 1.
        :param hxs:
        :return:
        """
        _ads_city = self.get_all_value_response(hxs, '//table[@class="dcs"]/tr[2]/td/text()')
        _ads_city = _ads_city.replace("\n", "").replace("\r", "").strip()
        _ads_cities = _ads_city.split(' - ')
        if (len(_ads_cities) == 2):
            return _ads_cities[1]

        return _ads_city
