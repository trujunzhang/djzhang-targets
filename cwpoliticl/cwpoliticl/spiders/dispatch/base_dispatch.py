from cwpoliticl.extensions.dnaindia_parser import DnaIndiaParser
from cwpoliticl.extensions.indianexpress_parser import IndianExpressParser
from cwpoliticl.extensions.theviewspaper_parser import TheViewsPaperParser
from cwpoliticl.items import WebsiteTypes


class BaseDispatch(object):
    def __init__(self):
        self.allowed_domains = [
            "www.dnaindia.com",
            "www.indianexpress.com",
            "http://theviewspaper.net"
        ]
        self.websites = {
            'http://www.dnaindia.com/analysis': WebsiteTypes.dnaindia,
            'http://indianexpress.com/opinion/': WebsiteTypes.indianexpress,
            'http://theviewspaper.net': WebsiteTypes.theviewspaper,
        }
        self.parses = {
            WebsiteTypes.dnaindia: DnaIndiaParser(),
            WebsiteTypes.indianexpress: IndianExpressParser(),
            WebsiteTypes.theviewspaper: TheViewsPaperParser(),
        }
        super(BaseDispatch, self).__init__()

    def get_allowed_domains(self):
        return self.allowed_domains

    def get_pagination_websites(self):
        return self.websites.keys()

    def parse_from_pagination(self, url, hxs, cache_db, history_db):
        type = self.websites[url]
        parse = self.parses[type]

        parse.parse_paginate(url, hxs, cache_db, history_db)
