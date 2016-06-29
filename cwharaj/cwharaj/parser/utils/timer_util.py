# coding=utf-8

from dateutil import parser
import datetime
import time


class TimerUtil(object):
    lang = {
        "second": "ثانية",
        "minute": "دقيقة",
        "hour": "ساعة",
        "month": "شهر",
        "year": "عام",
        "seconds": "ثواني",
        "minutes": "دقائق",
        "hours": "ساعات",
        "months": "شهور",
        "years": "سنوات",
        "ago": "قبل",
        "day": "يوم",
        "days": "ايام",
    }

    def __init__(self):
        super(TimerUtil, self).__init__()

    def get_time_from_string(self, time_ago):
        pass

    def get_time_for_opensooq(self, time_ago):
        """
        Converting string time to int.
        :param time_ago:  such as '2016.06.28'
        :return:
        """

        today = time.strptime(time_ago, "%Y.%m.%d")
        int_time = time.mktime(today)

        return int_time
