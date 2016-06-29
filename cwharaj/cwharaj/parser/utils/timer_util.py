# coding=utf-8

from dateutil import parser
import datetime
import time


class HarajsTime(object):
    tm_minute = 0
    tm_hour = 0
    tm_day = 0
    tm_month = 0
    tm_year = 0

    lang = [
        "دقيقه",  # "minute"
        "ساعه",  # "hour"
        "يوم",  # "day"
        "شهر",  # "month"
        "سنه",  # "year"
    ]

    value = [
        60,  # => $lang['minute'],
        60 * 60,  # => $lang['hour'],
        24 * 60 * 60,  # => $lang['day'],
        30 * 24 * 60 * 60,  # => $lang['month'],
        365 * 24 * 60 * 60,  # => $lang['year'],
    ]

    def __init__(self):
        super(HarajsTime, self).__init__()

    def maketime(self, split):
        for item in split:
            self._get_value_from_string(item.strip())

        return self._make_time()

    def _make_time(self):
        seconds = self.tm_minute * self.value[0] + \
                  self.tm_hour * self.value[1] + \
                  self.tm_day * self.value[2] + \
                  self.tm_month * self.value[3] + \
                  self.tm_year * self.value[4]

        return self._get_current_time() - seconds

    def _get_current_time(self):
        return int(time.time())

    def _get_value_from_string(self, item):
        split = item.split(' ')
        time_type = split[1]
        time_value = split[0]

        index = self.lang.index(time_type)

        if index == 0:
            self.tm_minute = time_value
        elif index == 1:
            self.tm_hour = time_value
        elif index == 2:
            self.tm_day = time_value
        elif index == 3:
            self.tm_month = time_value
        elif index == 4:
            self.tm_year = time_value


class TimerUtil(object):
    def __init__(self):
        super(TimerUtil, self).__init__()

    def get_time_for_harajs(self, time_ago):
        """
        :param time_ago: such as 'قبل 6 يوم و 2 ساعه في'
        :return:
        """

        spec_ago = 'قبل 0 دقيقه في'  # 0 minutes ago
        if spec_ago in time_ago:
            return int(time.time())
        spec_ago = 'قبل دقيقه في'  # A minute ago at
        if spec_ago in time_ago:
            return int(time.time())

        time_ago = time_ago.replace(' في', '').replace('قبل ', '').strip()
        split = time_ago.split(' و')
        return HarajsTime().maketime(split)

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
