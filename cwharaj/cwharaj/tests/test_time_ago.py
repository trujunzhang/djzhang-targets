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
        # time_ago = 'قبل 4 دقيقه في'
        # int_time = self.time_util.get_time_for_harajs(time_ago)
        # expect = 1467043200.0
        # self.assertEqual(int_time, expect)

        time_ago = 'قبل 0 دقيقه في'  # 0 minutes ago
        time_ago = ' قبل ساعه و 21 دقيقه في'  # Before an hour and 21 minutes in
        time_ago = ' قبل 6 يوم و 2 ساعه في'  # Before 6 days, 2 hours
        time_ago = ' قبل 3 شهر و 2 أسبوع في'  # Before 3 months and 2 weeks in
        time_ago = 'قبل 5 سنه و 10 شهر في'  # Before five years and 10 months in

        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = 1467043200.0
        self.assertEqual(int_time, expect)

        # def test_get_time_for_mstaml(self):
        #     time_ago = '2016.06.28'
        #     int_time = self.time_util.get_time_for_mstaml(time_ago)
        #     expect = 1467043200.0
        #     self.assertEqual(int_time, expect)

        # def test_get_time_for_opensooq(self):
        #     time_ago = '2016.06.28'
        #     int_time = self.time_util.get_time_for_opensooq(time_ago)
        #     expect = 1467043200.0
        #     self.assertEqual(int_time, expect)
