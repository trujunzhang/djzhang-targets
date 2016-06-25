# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from enum import Enum
import time


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    @classmethod
    def get_id_index(self, _url_from):
        if _url_from == WebsiteTypes.opensooq.value:
            return 3
        elif _url_from == WebsiteTypes.mstaml.value:
            return 1
        elif _url_from == WebsiteTypes.harajsa.value:
            return 1

        return -1

    opensooq = "opensooq"
    mstaml = "mstaml"
    harajsa = "harajsa"


class CacheItem(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()

    # unique row id
    ID = scrapy.Field()
    # cache form where, such as opensooq,mstaml.(WebsiteTypes variable)
    url_from = scrapy.Field()


class HistoryItem(scrapy.Item):
    url = scrapy.Field()
    guid = scrapy.Field()
    created_at = scrapy.Field()

    # the same as ads(table).id_ads
    ID = scrapy.Field()


class AdScrapeItem(scrapy.Item):
    model_id = scrapy.Field()
    url_from = scrapy.Field()
    url = scrapy.Field()
    created_at = scrapy.Field()


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

    @classmethod
    def get_default(self, section_item, _ads_title, _city_id, _ads_contact, _ads_body, _image_link,
                    _His_announcement_id, _type_ads_or=1, _close_ads=0):
        return Ad(
            ads_title=_ads_title,
            ads_city=_city_id,
            ads_tags_R=section_item.ads_tags_R,
            ads_tags_F=section_item.ads_tags_F,
            ads_tags_FF=section_item.ads_tags_FF,
            ads_contact=_ads_contact,
            ads_body=_ads_body,
            image_link=_image_link,
            type_ads_other_final=section_item.type_ads_other_final,
            un_model=section_item.un_model,
            status=1,
            fixing=0,
            Time_added=int(time.time()),
            His_announcement=_His_announcement_id,
            type_ads_or=_type_ads_or,
            close_ads=_close_ads,
            Last_updated_Ad=int(time.time()),
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
    def get_default(self, id_ads, id_His_response, text):
        return Comment(
            id_ads=id_ads,
            id_His_response=id_His_response,
            text=text,
            Time_added_co=int(time.time())
        )


# CREATE TABLE IF NOT EXISTS `cities`, not "city"
class City(scrapy.Item):
    # unique row id
    ID = scrapy.Field()

    text = scrapy.Field()

    @classmethod
    def get_default(self, text):
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
    def get_default(self, user_name, timeregister=0):
        return Member(
            username=user_name,
            password='',
            groupnumber=6,
            email='',
            timeregister=timeregister,
            member_code='',
            documentingmobile=0,
            Documentingemail=0,
            phone='',
            sendtime='3',
            active='',
            now='',
            Lastactivity=0,
            subscribe_1=0,
            subscribe_2=0,
            subscribe_3=0,
            The_pay_commission=0,
        )
