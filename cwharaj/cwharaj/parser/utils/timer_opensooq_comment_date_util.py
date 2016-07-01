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
        """
        Converting string time to int.
        :param comment_date is 'منذ 6 أشهر'
        :                     6 months ago
        :return:
        """
        comment_date = OpensooqCommentDateUtil.get_comment_date(comment_date)
        _offset = self.get_special_comment_date(comment_date)
        if _offset:
            pass

        return OpensooqCommentDateItem().maketime('')

    def get_special_comment_date(self, comment_date):
        _special_comment_date = {
            "ساعة": 60 * 60,  # About an hour ago
            "ساعتين": 60 * 60 * 2,  # Two hours ago
            # "3 ساعة": -1,  # ___Three hours ago___
            # "3 ساعات": -1,  # __3 hours ago__
            "يوم": 24 * 60 * 60,  # one day ago
            "يومين": 24 * 60 * 60 * 2,  # Two days ago
            # "3 أيام": -1,  # __3 days ago__
            "أسبوع": 24 * 60 * 60 * 7,  # a week ago
            "أسبوعين": 24 * 60 * 60 * 7 * 2,  # Two weeks ago
            # "3 اسابيع": -1,  # __Since 3(x) weeks__
            "شهر": 30 * 24 * 60 * 60,  # About a month ago
            "شهرين": 30 * 24 * 60 * 60 * 2,  # Two months ago
            # "3 أشهر": -1,  # __3 months ago__
            "سنة": 365 * 24 * 60 * 60,  # A year ago
            "سنتين": 365 * 24 * 60 * 60 * 2,  # Two years ago
        }
        if comment_date in _special_comment_date.keys():
            return _special_comment_date[comment_date]

    @classmethod
    def get_comment_date(self, text):
        return text.replace('منذ', '').replace("\n", "").replace("\r", "").strip()
