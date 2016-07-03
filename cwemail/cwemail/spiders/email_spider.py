# -*- coding: utf-8 -*-
import json
from random import Random

import scrapy
from scrapy.selector import Selector, HtmlXPathSelector
# yield WebdriverRequest(_url, callback=self.parse_category_full_page)
from cwemail.items import Email
import urlparse


class EmailsSpider(scrapy.Spider):
    name = "email"
    allowed_domains = ["http://apilayer.net"]
    start_urls = [
        'http://apilayer.net',
    ]

    handle_httpstatus_list = [404]

    def __init__(self, name=None, **kwargs):
        from cwemail.database_factory import DatabaseFactory, DatabaseTypes

        self._cache_db = DatabaseFactory.get_database(DatabaseTypes.cache, kwargs['mongo_uri'])
        self._history_db = DatabaseFactory.get_database(DatabaseTypes.history, kwargs['mongo_uri'])

        from cwemail.parser.response_parser import ResponseParse
        self._crawl_parser = ResponseParse()

        super(EmailsSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(EmailsSpider, cls).from_crawler(crawler,
                                                     args,
                                                     mongo_uri=crawler.settings.get('MONGODB_SERVER')
                                                     )

    def parse(self, response):
        # set API_Access_Key
        access_key = 'b60b7d69bda9c70ec9061a28561abbdc'

        # set email address
        email_address = 'trujunzhang@gmail.com'

        # Initialize CURL:
        _email_ajax = 'http://apilayer.net/api/check?access_key={}&email={}'.format(access_key, email_address)
        yield scrapy.Request(url=_email_ajax, callback=self.parse_email_ajax, dont_filter=True,
                             errback=self.parse_email_ajax_error)

    def parse_email_ajax_error(self, response):
        error = response.body

    def parse_email_ajax(self, response):
        content = response.body
        validationResult = json.loads(content)
        # Access and use your preferred validation result objects
        format_valid = validationResult['format_valid']
        smtp_check = validationResult['smtp_check']
        score = validationResult['score']
