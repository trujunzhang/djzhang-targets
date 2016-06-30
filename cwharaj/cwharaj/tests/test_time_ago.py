# coding=utf-8
import unittest

import time

from cwharaj.parser.utils.timer_util import TimerUtil


class TimeAgoTest(unittest.TestCase):
    def setUp(self):
        self.time_util = TimerUtil()

    def test_get_time_for_harajs(self):
        time_ago = 'قبل 4 دقيقه في'  # 4 minutes ago
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = int(time.time()) - 240
        self.assertEqual(int_time, expect)

        time_ago = 'قبل 0 دقيقه في'  # 0 minutes ago
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = int(time.time())
        self.assertEqual(int_time, expect)

        time_ago = 'قبل دقيقه في'  # A minute ago at
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = int(time.time())
        self.assertEqual(int_time, expect)

        time_ago = ' قبل ساعه و 21 دقيقه في'  # Before an hour and 21 minutes in
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = int(time.time()) - 4860
        self.assertEqual(int_time, expect)

        time_ago = ' قبل 6 يوم و 2 ساعه في'  # Before 6 days, 2 hours
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = int(time.time()) - 525600
        self.assertEqual(int_time, expect)

        time_ago = ' قبل 3 شهر و 2 أسبوع في'  # Before 3 months and 2 weeks in
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = int(time.time()) - 1814400
        self.assertEqual(int_time, expect)

        time_ago = 'قبل 5 سنه و 10 شهر في'  # Before five years and 10 months in
        # url: 'https://haraj.com.sa/11140489/_قطع_غيار_سيارات_مستعملتشليح/'
        int_time = self.time_util.get_time_for_harajs(time_ago)
        expect = int(time.time()) - 240
        self.assertEqual(int_time, expect)

    def test_get_time_for_mstaml(self):
        # url: 'http://www.mstaml.com/2079892/تفويض_إلكتروني_للمؤسسات/'
        # time_ago = '2016-06-29 14:39:34 GMT'  # time_added(1467211174)
        time_ago = '2016-06-29 14:41:10 GMT'  # _last_updated_ad(1467211270)
        time_ago = [
            {
                'string': '2016-06-29 14:41:10 GMT',  # _last_updated_ad(1467211270)
                'time': 1467211270
            },
            {
                'string': '2016-06-29 14:39:34 GMT',  # time_added(1467211174)
                'time': 1467211174
            }
        ]
        for item in time_ago:
            int_time = self.time_util.get_time_for_mstaml(item['string'])
            expect = item['time']
            self.assertEqual(int_time, expect)

    def test_get_time_for_opensooq(self):
        time_ago = '2016.06.28'
        int_time = self.time_util.get_time_for_opensooq(time_ago)
        expect = 1467072000.0
        self.assertEqual(int_time, expect)
