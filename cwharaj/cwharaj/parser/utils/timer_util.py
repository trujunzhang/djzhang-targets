# coding=utf-8

from dateutil import parser
import datetime
import time


class TimerUtil(object):
    lang = {
        "second": "ثانية",
        "minute": "دقيقة",
        "hours": "ساعه",
        "month": "شهر",
        "year": "عام",
        "seconds": "ثواني",
        "minutes": "دقائق",
        "hours": "ساعات",
        "months": "شهور",
        "years": "سنوات",
        "day": "يوم",
    }

    def __init__(self):
        super(TimerUtil, self).__init__()

    def get_time_for_harajs(self, time_ago):
        """
        :param time_ago: such as 'قبل 6 يوم و 2 ساعه في'
        :return:
        """
        time_ago = time_ago.strip()
        time_ago = time_ago.replace(' في', '').replace('قبل ', '')
        split = time_ago.split(' و')
        _len = len(split)

    def get_time_for_mstaml(self, time_ago):
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

    def _get_current_time(self):
        return time.time()
