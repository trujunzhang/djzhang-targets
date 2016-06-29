# coding=utf-8
import unittest

from cwharaj.parser.utils.timer_util import TimerUtil


class TimeAgoTest(unittest.TestCase):
    def setUp(self):
        self.time_util = TimerUtil()

    # def test_get_time_from_string(self):
    #     time_ago = 'آخر تحديث قبل 17 دقيقه'
    #     self.time_util.get_time_from_string(time_ago)

    def test_get_time_for_harajs(self):
        time_ago = '2016.06.28'
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = 1467043200.0
        self.assertEqual(int_time, expect)

    def test_get_time_for_mstaml(self):
        time_ago = '2016.06.28'
        int_time = self.time_util.get_time_for_mstaml(time_ago)
        expect = 1467043200.0
        self.assertEqual(int_time, expect)

    def test_get_time_for_opensooq(self):
        time_ago = '2016.06.28'
        int_time = self.time_util.get_time_for_opensooq(time_ago)
        expect = 1467043200.0
        self.assertEqual(int_time, expect)
