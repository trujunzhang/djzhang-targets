# coding=utf-8
import unittest

from cwharaj.parser.utils.timer_util import TimerUtil


class TimeAgoTest(unittest.TestCase):
    def setUp(self):
        self.time_util = TimerUtil()

    def test_get_time_from_string(self):
        time_ago = 'آخر تحديث قبل 17 دقيقه'
        self.time_util.get_time_from_string(time_ago)
