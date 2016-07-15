from cwpoliticl.extensions.dnaindia_parser import DnaIndiaParser
from cwpoliticl.extensions.indianexpress_parser import IndianExpressParser
from cwpoliticl.extensions.theviewspaper_parser import TheViewsPaperParser
from cwpoliticl.items import WebsiteTypes
from cwpoliticl.scraped_websites import websites_allowed_domains, scraped_websites, websites_parses


class BaseDispatch(object):
    def __init__(self):
        self.allowed_domains = websites_allowed_domains
        self.websites = scraped_websites
        self.parses = websites_parses
        super(BaseDispatch, self).__init__()

    def get_allowed_domains(self):
        return self.allowed_domains

    def get_pagination_websites(self):
        return self.websites.keys()

    def parse_from_pagination(self, url, hxs, cache_db, history_db):
        type = self.websites[url]
        parse = self.parses[type]

        parse.parse_paginate(url, hxs, cache_db, history_db)
