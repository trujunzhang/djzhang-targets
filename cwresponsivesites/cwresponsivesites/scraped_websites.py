# coding=utf-8
from enum import Enum


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
