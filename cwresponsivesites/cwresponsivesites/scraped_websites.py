# coding=utf-8
from enum import Enum
from cwresponsivesites.utils.date_utils import DateUtils


class Politicl:
    versionCode = '5.1.6 for meteor with mongodb'
    app_logs = {
        '1.0.1': [
            'Fixed 17 issues.'
        ]
    }

    @classmethod
    def print_info(cls):
        import logging
        logging.debug("  The current version code: {}".format(Politicl.versionCode))
        t = DateUtils.get_utc_date().strftime("%I:%M%p on %B %d, %Y")
        logging.debug("  running(UTC) {}".format(t))
        for key in sorted(Politicl.app_logs):
            logging.debug("  {}:{}".format(key, Politicl.app_logs[key]))


def get_crawler_name():
    # Extensions

    # is_pagination = True
    is_pagination = False

    crawler_names = [
        # "politicl",
        # "politicl_debug"
        # "politicl_watch",
        # "politicl_maintain",
        #     example
        "kaismh"
    ]

    return {
        'name': crawler_names[0],
    }
