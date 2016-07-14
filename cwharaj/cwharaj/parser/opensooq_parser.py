# coding=utf-8
import logging

from cwharaj.items import Ad, CacheItem, WebsiteTypes, City, Member, OpensooqPhone
from cwharaj.parser.base_parser import BaseParser
from cwharaj.parser.utils.harajs_comments import HarajsComments
from cwharaj.parser.utils.harajs_section import HarajsSection
from cwharaj.parser.utils.timer_opensooq_comment_date_util import OpensooqCommentDateUtil
from cwharaj.utils.phone_number_set import PhoneNumberItem
from cwharaj.parser.utils.timer_util import TimerUtil


class OpensooqParse(BaseParser):
    def __init__(self):
        self.url_from = WebsiteTypes.opensooq.value
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
            _ID = CrawlUtils.get_model_id_from_page_url(href, 3)

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
        _ID = CrawlUtils.get_model_id_from_page_url(url, 3)

        # ADs User
        # memberName len(list) = 2
        _memberName = self.get_value_response(hxs, '//*[@class="userDet tableCell vTop"]/strong/a/text()')
        # member_timeregister is 'اريخ الانضمام  08/10/2015'
        member_timeregister = self.get_value_response(hxs, '//span[@class="joinDate"]/text()')

        _ads_city = self.get_value_response(hxs,
                                            '//*[@class="sellerAddress"]/span[@class="sellerAddressText"]/a/text()')

        # ADs
        _ads_title = self.get_value_response(hxs, '//*[@class="postTitleCont"]/div/h1/text()')
        _image_link = self.get_pictures(hxs, '//*[@class="galleryLeftList fLeft"]/ul/li/a/img/@src')
        time_added = self.get_value_response(hxs, '//*[@class="postDate fRight"]/text()')
        _ads_body = self.get_all_value_response(hxs, '//*[@class="postDesc"]/p/text()')

        _sections = self.get_section(self.get_value_response(hxs, '//*[@class="breadcrumbs"]'))

        # Fixing the empty page.
        if (_ads_title == '') and (len(_sections) == 0):
            logging.debug("  The empty page on the opensooq")
            return PhoneNumberItem(url, _ID)

        section_item = HarajsSection(_sections, item_db).get_section_item_for_opensooq()

        # Replace "\n","\r"
        _ads_title = _ads_title.replace("\n", "").replace("\r", "").strip()

        # ====
        # Save to relative database
        # ====

        # Because opensooq's contact is image base64 format,
        # So Firstly request it via ajax.
        ads_contact = ''
        phone_number_base64 = self.query_phone_number_base64_image(hxs)
        if phone_number_base64:
            opensooq_phone_id = item_db.save_opensooq_phone(OpensooqPhone.get_default(phone_number_base64))
            # opensooq's contact is a specialized format.
            ads_contact = Ad.get_opensooq_phone(opensooq_phone_id)

        time_added = OpensooqCommentDateUtil().get_time_for_opensooq_time_added(time_added)
        member_timeregister = OpensooqCommentDateUtil().get_time_for_opensooq_member_timeregister(member_timeregister)

        city_id = item_db.save_city(City.get_default(_ads_city))

        _His_announcement_id = item_db.save_member(
            Member.get_default(user_name=_memberName, timeregister=member_timeregister, phone=ads_contact))

        item = Ad.get_default(
            section_item=section_item,
            ads_title=_ads_title,
            city_id=city_id,
            ads_contact=ads_contact,
            ads_body=_ads_body,
            image_link=_image_link,
            His_announcement_id=_His_announcement_id,
            Time_added=time_added,
            type_ads_or=1, _close_ads=0
        )

        id_ads = item_db.save_ad(item)

        # Scrape all comments for the ad.
        HarajsComments(self, item_db, id_ads).save_for_opensooq(hxs)

        return item

    def query_phone_number_base64_image(self, hxs):
        """

        Because the opensooq's phone number is the base64 image,
        So we need to get the base64 format via ajax.

        :param hxs:
        :return:
        """
        phone_data_id = self.get_value_response(hxs, '//*[@class="phoneNumber table getPhoneNumber"]/@data-id')
        phone_data_type = self.get_value_response(hxs, '//*[@class="phoneNumber table getPhoneNumber"]/@data-type')

        if phone_data_id:
            ajax_url = "https://sa.opensooq.com/ar/post/get-phone-number?model_id={}&model_type={}".format(
                phone_data_id, phone_data_type)

            import requests
            r = requests.get(ajax_url)
            if r.status_code == 200:
                return r.text

    def get_pictures(self, hxs, selector):
        _pictures = hxs.xpath(selector).extract()
        list = []
        for picture in _pictures:
            list.append(picture.replace('75x75', '563x400'))

        return ",".join(list)

    def get_section(self, section_panel):
        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(section_panel)

        _As = soup.findAll('a', {'property': 'v:title'})
        sections = []
        for a in _As:
            sections.append(a.text.replace("\n", "").replace("\r", "").strip().encode('utf-8'))

        return sections
