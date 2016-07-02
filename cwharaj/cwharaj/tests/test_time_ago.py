# coding=utf-8
import unittest

import time

from cwharaj.parser.utils.timer_opensooq_comment_date_util import OpensooqCommentDateUtil
from cwharaj.parser.utils.timer_util import TimerUtil


class TimeAgoTest(unittest.TestCase):
    def setUp(self):
        self.time_util = TimerUtil()

    # def test_get_time_for_harajs(self):
    #     time_ago = 'قبل 4 دقيقه في'  # 4 minutes ago
    #     int_time = self.time_util.get_time_for_harajs(time_ago)
    #     expect = int(time.time()) - 240
    #     self.assertEqual(int_time, expect)
    #
    #     time_ago = 'قبل 0 دقيقه في'  # 0 minutes ago
    #     int_time = self.time_util.get_time_for_harajs(time_ago)
    #     expect = int(time.time())
    #     self.assertEqual(int_time, expect)
    #
    #     time_ago = 'قبل دقيقه في'  # A minute ago at
    #     int_time = self.time_util.get_time_for_harajs(time_ago)
    #     expect = int(time.time())
    #     self.assertEqual(int_time, expect)
    #
    #     time_ago = ' قبل ساعه و 21 دقيقه في'  # Before an hour and 21 minutes in
    #     int_time = self.time_util.get_time_for_harajs(time_ago)
    #     expect = int(time.time()) - 4860
    #     self.assertEqual(int_time, expect)
    #
    #     time_ago = ' قبل 6 يوم و 2 ساعه في'  # Before 6 days, 2 hours
    #     int_time = self.time_util.get_time_for_harajs(time_ago)
    #     expect = int(time.time()) - 525600
    #     self.assertEqual(int_time, expect)
    #
    #     time_ago = ' قبل 3 شهر و 2 أسبوع في'  # Before 3 months and 2 weeks in
    #     int_time = self.time_util.get_time_for_harajs(time_ago)
    #     expect = int(time.time()) - 1814400
    #     self.assertEqual(int_time, expect)
    #
    #     time_ago = 'قبل 5 سنه و 10 شهر في'  # Before five years and 10 months in
    #     # url: 'https://haraj.com.sa/11140489/_قطع_غيار_سيارات_مستعملتشليح/'
    #     int_time = self.time_util.get_time_for_harajs(time_ago)
    #     expect = int(time.time()) - 19008000
    #     self.assertEqual(int_time, expect)
    #
    # def test_get_time_for_mstaml(self):
    #     # url: 'http://www.mstaml.com/2079892/تفويض_إلكتروني_للمؤسسات/'
    #     # time_ago = '2016-06-29 14:39:34 GMT'  # time_added(1467211174)
    #     time_ago = '2016-06-29 14:41:10 GMT'  # _last_updated_ad(1467211270)
    #     time_ago = [
    #         {
    #             'string': '2016-06-29 14:41:10 GMT',  # _last_updated_ad(1467211270)
    #             'time': 1467211270
    #         },
    #         {
    #             'string': '2016-06-29 14:39:34 GMT',  # time_added(1467211174)
    #             'time': 1467211174
    #         }
    #     ]
    #     for item in time_ago:
    #         int_time = self.time_util.get_time_for_mstaml(item['string'])
    #         expect = item['time']
    #         self.assertEqual(int_time, expect)
    #
    # def test_get_time_for_opensooq_member_timeregister(self):
    #     # _member_timeregister is 'تاريخ الانضمام  19/07/2013'('Join date 19/07/2013')
    #     time_ago = ' 19/07/2013 '
    #     int_time = self.time_util.get_time_for_opensooq_member_timeregister(time_ago)
    #     expect = 1374192000.0
    #     self.assertEqual(int_time, expect)
    #
    # def test_get_time_for_opensooq_time_added(self):
    #     # _time_added is 'تاريخ النشر: 2016.06.28'('Published: 2016.06.28')
    #     _time_added = ' 2016.06.28 '
    #     int_time = self.time_util.get_time_for_opensooq_time_added(_time_added)
    #     expect = 1467072000.0
    #     self.assertEqual(int_time, expect)

    def test_get_time_for_opensooq_comment_date(self):
        # _time_added_co = " منذ ساعة "  # About an hour ago
        # int_time = OpensooqCommentDateUtil().get_time_for_opensooq_comment(_time_added_co)
        # expect = int(time.time()) - 3600
        # self.assertEqual(int_time, expect)

        # _time_added_co = " منذ سنة "  # A year ago
        # int_time = OpensooqCommentDateUtil().get_time_for_opensooq_comment(_time_added_co)
        # expect = int(time.time()) - 31536000
        # self.assertEqual(int_time, expect)

        _time_added_co = "  3 أشهر "  # __3 months ago__
        int_time = OpensooqCommentDateUtil().get_time_for_opensooq_comment(_time_added_co)
        expect = int(time.time()) - 31536000
        self.assertEqual(int_time, expect)

        # 'منذ 12 ساعة'('12 hours ago')
        _time_added_co = 'منذ 12 ساعة'
        # _time_added is 'منذ 6 أشهر'
        # 6 months ago
        # _time_added_co = ' منذ 6 أشهر '
        # int_time = OpensooqCommentDateUtil().get_time_for_opensooq_comment(_time_added_co)
        # expect = 1467072000.0
        # self.assertEqual(int_time, expect)
