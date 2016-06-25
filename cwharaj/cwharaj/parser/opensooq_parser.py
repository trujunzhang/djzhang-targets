import logging

from cwharaj.items import Ad, CacheItem, WebsiteTypes, City, Member
from cwharaj.parser.base_parser import BaseParser
from cwharaj.parser.utils.harajs_comments import HarajsComments
from cwharaj.parser.utils.harajs_section import HarajsSection


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

    def parse(self, url, hxs, item_db, phoneNumberSet=None):
        from cwharaj.utils.crawl_utils import CrawlUtils
        _ID = CrawlUtils.url_parse_id_from_page_url(url, 3)

        # ADs User
        _memberName = self.get_value_response(hxs, '//*[@class="userDet tableCell vTop"]/strong/a/text()')
        _member_timeregister = self.get_value_response(hxs, '//span[@class="joinDate"]/text()')
        _ads_city = self.get_value_response(hxs,
                                            '//*[@class="sellerAddress"]/span[@class="sellerAddressText"]/a/text()')

        # ADs
        _ads_title = self.get_value_response(hxs, '//*[@class="postTitleCont"]/div/h1/text()')
        _image_link = self.get_pictures(hxs, '//*[@class="galleryLeftList fLeft"]/ul/li/a/img/@src')
        _time_added = self.get_value_response(hxs, '//*[@class="postDate fRight"]/text()')
        _ads_body = self.get_all_value_from_response(hxs, '//*[@class="postDesc"]/p/text()')

        _sections = self.get_section(self.get_value_response(hxs, '//*[@class="breadcrumbs"]'))
        _section_item = HarajsSection(_sections, item_db).get_section_item()

        # Replace "\n","\r"
        _ads_city = _ads_city.strip()
        _time_added = _time_added.replace("\n", "").replace("\r", "").strip()
        _ads_title = _ads_title.replace("\n", "").replace("\r", "").strip()
        _memberName = _memberName.strip()

        # return phone_number_item

        # ====
        # Save to relative database
        # ====

        _city_id = item_db.save_city(City.get_default(_ads_city))

        _His_announcement_id = item_db.save_member(Member.get_default(_memberName))

        # Because opensooq's contact is image base64 format.
        # So the ads's contact must be empty.
        _ads_contact = ""

        item = Ad.get_default(
            section_item=_section_item,
            _ads_title=_ads_title,
            _city_id=_city_id,
            _ads_contact=_ads_contact,
            _ads_body=_ads_body,
            _image_link=_image_link,
            _His_announcement_id=_His_announcement_id,
            _type_ads_or=1, _close_ads=0
        )

        id_ads = item_db.save_ad(item)

        # HarajsComments(self, item_db, id_ads).save_for_opensooq(hxs)

        phone_number_item = phoneNumberSet.get_phone_number_item(_ID)
        if phone_number_item:
            # Specially, parse phone_number only for opensooq
            _phone_data_id = self.get_value_response(hxs, '//*[@class="phoneNumber table getPhoneNumber"]/@data-id')
            _phone_data_type = self.get_value_response(hxs, '//*[@class="phoneNumber table getPhoneNumber"]/@data-type')

            phone_number_item.phone_data_id = _phone_data_id
            phone_number_item.phone_data_type = _phone_data_type
            phone_number_item.scrapy_item = item

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
