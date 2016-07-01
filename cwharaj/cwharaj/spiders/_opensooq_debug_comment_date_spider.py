# -*- coding: utf-8 -*-

import scrapy

from cwharaj.items import WebsiteTypes, OpensooqCommentDateItem
from cwharaj.parser.utils.timer_util import TimerUtil


class OpensooqDebugCommentDateSpider(scrapy.Spider):
    name = "opensooq_commentdate_debug"
    allowed_domains = [
        "https://sa.opensooq.com/",
    ]

    opensooq_pagination = 'https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=&page={}'
    opensooq_pagination_start_page = 20
    opensooq_pagination_total_page = 5
    start_urls = [
        # paginate
        opensooq_pagination.format(opensooq_pagination_start_page)
        # detail
        # 'https://sa.opensooq.com/ar/search/29602021/بيت-شعبي-مع-مجلس-مسلح-للبيع'  # 8 comments
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self.opensooq_parse = OpensooqParse()

        super(OpensooqDebugCommentDateSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(OpensooqDebugCommentDateSpider, cls).from_crawler(crawler,
                                                                       args,
                                                                       host=crawler.settings.get('SQL_HOST'),
                                                                       port=crawler.settings.get('SQL_PORT'),
                                                                       user=crawler.settings.get('SQL_USER'),
                                                                       passwd=crawler.settings.get('SQL_PASSWD'),
                                                                       db=crawler.settings.get('SQL_DB'),
                                                                       collection_name=crawler.settings.get(
                                                                           'SQL_COLLECTION_NAME')
                                                                       )

    def parse(self, response):
        # self.opensooq_parse.parse_paginate(response.url, response, self._cache_db, self._history_db)
        # self.opensooq_pagination_start_page -= 1
        # _next_pagination = self.opensooq_pagination.format(self.opensooq_pagination_start_page)
        #
        # yield scrapy.Request(_next_pagination, callback=self.parse, dont_filter=True)

        _row = self._cache_db.get_oldest_row('', WebsiteTypes.opensooq.value)
        if _row:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)

    def parse_page_from_opensooq(self, response):
        self._save_for_opensooq(response)

        _row = self._cache_db.get_oldest_row(response.url, WebsiteTypes.opensooq.value)
        if _row:
            yield scrapy.Request(_row['url'], callback=self.parse_page_from_opensooq, dont_filter=True)

    def _save_for_opensooq(self, hxs):
        _comments_selector = '//*[@class="commentItems clear"]/li'
        _comments_div = hxs.xpath(_comments_selector)

        _count = 1
        for _comment_div in _comments_div:
            _selector = _comments_selector + '[' + str(_count) + ']'

            _comment_date = self.opensooq_parse.get_value_response(hxs, _selector + '/div/span/text()')
            if _comment_date == '':
                continue

            opensooq_comment_date = OpensooqCommentDateItem.get_default(_comment_date)
            self._item_db.save_opensooq_comment_date(opensooq_comment_date)
            _count += 1
