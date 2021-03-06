# coding=utf-8
import logging
import time


class HarajsTime(object):
    """
    Converting the string date to time using 'GMT'.
    """
    tm_minute = 0
    tm_hour = 0
    tm_day = 0
    tm_week = 0
    tm_month = 0
    tm_year = 0

    lang = [
        "دقيقه",  # "minute"
        "ساعه",  # "hour"
        "يوم",  # "day"
        'أسبوع',  # "week"
        "شهر",  # "month"
        "سنه",  # "year"
    ]

    value = [
        60,  # => $lang['minute'],
        60 * 60,  # => $lang['hour'],
        24 * 60 * 60,  # => $lang['day'],
        24 * 60 * 60 * 7,  # => $lang['week'],
        30 * 24 * 60 * 60,  # => $lang['month'],
        365 * 24 * 60 * 60,  # => $lang['year'],
    ]

    def __init__(self):
        super(HarajsTime, self).__init__()

    def maketime(self, split, url):
        for item in split:
            item = item.replace('بل', '').strip()
            self._get_value_from_string(item, url)

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

    def _get_value_from_string(self, item, url):
        split = item.split(' ')
        if len(split) == 1:
            if split[0] in self.lang:  # such as 'ساعه'(an hour)
                time_type = split[0]
                time_value = 1
            else:
                logging.debug("  make time for harajs failure, {}".format(url))
                return
        else:
            time_type = split[1]
            time_value = int(split[0])

        if time_type in self.lang:
            index = self.lang.index(time_type)

            if index == 0:
                self.tm_minute = time_value
            elif index == 1:
                self.tm_hour = time_value
            elif index == 2:
                self.tm_day = time_value
            elif index == 3:
                self.tm_week = time_value
            elif index == 4:
                self.tm_month = time_value
            elif index == 5:
                self.tm_year = time_value

            logging.debug("  make time for harajs sucessfully, {}".format(url))


class TimerUtil(object):
    def __init__(self):
        super(TimerUtil, self).__init__()

    def get_time_for_harajs(self, time_ago, url=''):
        """
        :param time_ago: such as 'قبل 6 يوم و 2 ساعه في'
        :return:
        """

        if time_ago == '':
            return self._get_default_time()

        spec_ago = 'قبل 0 دقيقه في'  # 0 minutes ago
        if spec_ago in time_ago:
            return int(time.time())
        spec_ago = 'قبل دقيقه في'  # A minute ago at
        if spec_ago in time_ago:
            return int(time.time())

        time_ago = time_ago.replace(' في', '').replace('قبل ', '').replace("\xc2\xa0", "").strip()

        split = time_ago.split(' و')
        return HarajsTime().maketime(split, url)

    def get_time_for_mstaml(self, time_ago):
        """
        Converting string time to int.
        :param time_ago:  such as '2016-06-29 14:39:34 GMT'
        :return:
        """

        if time_ago == '':
            return self._get_default_time()

        today = time.strptime(time_ago, "%Y-%m-%d %H:%M:%S %Z")
        int_time = time.mktime(today)

        return int_time + self._get_utc_offset()

    def _get_utc_offset(self):
        from datetime import datetime
        ts = time.time()
        utc_offset = (datetime.fromtimestamp(ts) -
                      datetime.utcfromtimestamp(ts)).total_seconds()
        return utc_offset

    def _get_default_time(self):
        """
        When time string is empty, So we only give it a default time.
        :return:
        """
        return int(time.time()) + self._get_utc_offset()
