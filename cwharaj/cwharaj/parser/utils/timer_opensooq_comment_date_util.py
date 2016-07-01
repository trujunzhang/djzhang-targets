# coding=utf-8
import logging
import time

from cwharaj.parser.utils.timer_util import TimerUtil


class OpensooqCommentDateItem(object):
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
        super(OpensooqCommentDateItem, self).__init__()

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
        if len(split) == 1:
            if split[0] in self.lang:  # such as 'ساعه'(an hour)
                time_type = split[0]
                time_value = 1
            else:
                logging.debug("  make time for harajs failure".format(item.encode('utf-8')))
                return
        else:
            time_type = split[1]
            time_value = int(split[0])

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

        logging.debug("  make time for harajs sucessfully".format(item))


class OpensooqCommentDateUtil(TimerUtil):
    def __init__(self):
        super(OpensooqCommentDateUtil, self).__init__()

    def get_time_for_opensooq_comment(self, comment_date):
        comment_date = OpensooqCommentDateUtil.get_comment_date(comment_date)
        """
        Converting string time to int.
        :param comment_date is 'منذ 6 أشهر'
        :                     6 months ago
        :return:
        """
        comment_date = comment_date.replace("\n", "").replace("\r", "").strip()

        today = time.strptime(comment_date, "%Y.%m.%d")
        time.tzset()
        int_time = time.mktime(today)

        return OpensooqCommentDateItem().maketime('')

    def get_special_comment_date(self, comment_date):
        _special_comment_date = {
            "ساعة": 123,  # About an hour ago
            "ساعتين": 123,  # Two hours ago
            "يوم": 123,  # one day ago
            "يومين": 123,  # Two days ago
            "أسبوع": 123,  # a week ago
            "أسبوعين": 123,  # Two weeks ago
            "شهر": 123,  # About a month ago
            "شهرين": 123,  # Two months ago
            "سنة": 123,  # A year ago
            "سنتين": 123,  # Two years ago
        }
        pass

    @classmethod
    def get_comment_date(self, text):
        return text.replace('منذ', '').replace("\n", "").replace("\r", "").strip()
