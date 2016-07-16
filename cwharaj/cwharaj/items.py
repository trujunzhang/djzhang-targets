# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import time
from datetime import datetime

import scrapy

from cwharaj.parser.utils.timer_opensooq_comment_date_util import OpensooqCommentDateUtil
from cwharaj.utils.crawl_utils import CrawlUtils


class CacheItem(scrapy.Item):
    model_id = scrapy.Field()
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()

    url = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_default(self, model_id, url, url_from):
        return CacheItem(
            model_id=model_id,
            url_from=url_from,
            url=url,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' ')
        )


class HistoryItem(scrapy.Item):
    # the same as ads(table).id_ads
    ads_id = scrapy.Field()
    model_id = scrapy.Field()

    url = scrapy.Field()
    created_at = scrapy.Field()

    @classmethod
    def get_default(self, url, id_ads, url_from):
        model_id = CrawlUtils.get_model_id_by_url_from(url, url_from)
        return HistoryItem(
            ads_id=id_ads,
            model_id=model_id,
            url=url,
            created_at=datetime.utcnow().replace(microsecond=0).isoformat(' '),
        )


class OpensooqCommentDateItem(scrapy.Item):
    text = scrapy.Field()
    english = scrapy.Field()
    seconds = scrapy.Field()

    @classmethod
    def get_default(self, text):
        text = OpensooqCommentDateUtil.get_comment_date(text)
        return OpensooqCommentDateItem(
            text=text,
            english='',
            seconds=0,
        )


class Ad(scrapy.Item):
    # The variable is not contained on the ads(table),
    # Just store the id of the ads(table).
    id_ads = scrapy.Field()

    ads_title = scrapy.Field()
    ads_city = scrapy.Field()
    ads_tags_R = scrapy.Field()
    ads_tags_F = scrapy.Field()
    ads_tags_FF = scrapy.Field()
    ads_contact = scrapy.Field()
    ads_body = scrapy.Field()
    image_link = scrapy.Field()
    type_ads_other_final = scrapy.Field()
    un_model = scrapy.Field()
    status = scrapy.Field()
    fixing = scrapy.Field()
    Time_added = scrapy.Field()
    His_announcement = scrapy.Field()
    type_ads_or = scrapy.Field()
    close_ads = scrapy.Field()
    Last_updated_Ad = scrapy.Field()
    closecomment = scrapy.Field()
    fixed_home = scrapy.Field()
    fixed_tub = scrapy.Field()
    fixed_sec = scrapy.Field()
    fixed_sec2 = scrapy.Field()
    fixed_sec3 = scrapy.Field()
    timer_mazad = scrapy.Field()

    # Temp Variable
    url_from = scrapy.Field()

    @classmethod
    def get_opensooq_phone(cls, opensooq_phone_id):
        return 'base64,{}'.format(opensooq_phone_id)

    @classmethod
    def get_default(self, section_item, ads_title, city_id, ads_contact, ads_body, image_link,
                    His_announcement_id, url_from,
                    Time_added=-1, Last_updated_Ad=-1,
                    type_ads_or=1, _close_ads=0):

        if Time_added == -1:
            Time_added = int(time.time())
        if Last_updated_Ad == -1:
            # If no last_updated, set it the same as the time_added.
            Last_updated_Ad = Time_added

        return Ad(
            url_from=url_from,

            ads_title=ads_title,
            ads_city=city_id,
            ads_tags_R=section_item.ads_tags_R,
            ads_tags_F=section_item.ads_tags_F,
            ads_tags_FF=section_item.ads_tags_FF,
            ads_contact=ads_contact,
            ads_body=ads_body,
            image_link=image_link,
            type_ads_other_final=section_item.type_ads_other_final,
            un_model=section_item.un_model,
            status=1,
            fixing=0,
            Time_added=Time_added,
            His_announcement=His_announcement_id,
            type_ads_or=type_ads_or,
            close_ads=_close_ads,
            Last_updated_Ad=Last_updated_Ad,
            closecomment=0,
            fixed_home=0,
            fixed_tub=0,
            fixed_sec=0,
            fixed_sec2=0,
            fixed_sec3=0,
            timer_mazad=0,
        )


# CREATE TABLE IF NOT EXISTS `section`, not "sectionoadvertise"
class Section(scrapy.Item):
    # It is so important.
    # The variable is the section(table).id,
    id = scrapy.Field()

    name = scrapy.Field()
    type = scrapy.Field()
    Documentto = scrapy.Field()
    Contents = scrapy.Field()
    linkmodel = scrapy.Field()

    @classmethod
    def get_default(self, _name, _documentto=""):
        """
        Get the default Section instance.
        :param _name: section's name
        :param _documentto: beloing to other section
        :return:
        """
        return Section(
            name=_name,
            type='فرعي',  # ???
            Documentto=_documentto,  # ???
            Contents='عام',  # ???
            linkmodel='yes'
        )


# CREATE TABLE IF NOT EXISTS `comments`, not "comment"
class Comment(scrapy.Item):
    id_ads = scrapy.Field()
    id_His_response = scrapy.Field()
    text = scrapy.Field()
    Time_added_co = scrapy.Field()

    @classmethod
    def get_default(self, id_ads, id_His_response, text, Time_added_co=-1):
        if Time_added_co == -1:
            Time_added_co = int(time.time())
        return Comment(
            id_ads=id_ads,
            id_His_response=id_His_response,
            text=text,
            Time_added_co=Time_added_co
        )


# CREATE TABLE IF NOT EXISTS `cities`, not "city"
class City(scrapy.Item):
    text = scrapy.Field()

    @classmethod
    def get_default(self, text):
        text = text.replace("\n", "").replace("\r", "").strip()
        return City(
            text=text
        )


# CREATE TABLE IF NOT EXISTS `members`, not "member"
class Member(scrapy.Item):
    username = scrapy.Field()
    password = scrapy.Field()
    groupnumber = scrapy.Field()
    email = scrapy.Field()
    timeregister = scrapy.Field()
    member_code = scrapy.Field()
    documentingmobile = scrapy.Field()
    Documentingemail = scrapy.Field()
    phone = scrapy.Field()
    sendtime = scrapy.Field()
    active = scrapy.Field()
    now = scrapy.Field()
    Lastactivity = scrapy.Field()
    subscribe_1 = scrapy.Field()
    subscribe_2 = scrapy.Field()
    subscribe_3 = scrapy.Field()
    The_pay_commission = scrapy.Field()

    @classmethod
    def get_default(self, user_name, timeregister=-1, email='', phone=''):
        user_name = user_name.replace('\n', '').replace('\r', '').strip()
        if timeregister == -1:
            timeregister = int(time.time())

        return Member(
            username=user_name,
            password='',
            groupnumber=6,
            email=email,
            timeregister=timeregister,
            member_code='',
            documentingmobile=0,
            Documentingemail=0,
            phone=phone,
            sendtime='3',
            active='',
            now='',
            Lastactivity=0,
            subscribe_1=0,
            subscribe_2=0,
            subscribe_3=0,
            The_pay_commission=0,
        )


# CREATE TABLE IF NOT EXISTS `opensooq_phone`
class OpensooqPhone(scrapy.Item):
    # unique row id
    id = scrapy.Field()

    phone = scrapy.Field()

    @classmethod
    def get_default(self, phone):
        return OpensooqPhone(
            phone=phone
        )
