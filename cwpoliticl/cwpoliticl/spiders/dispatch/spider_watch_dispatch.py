from cwpoliticl.items import WebsiteTypes


class SpiderWatchDispatch(object):
    def __init__(self):
        self.websites = {
            WebsiteTypes.dnaindia: 'http://www.dnaindia.com/analysis',
            WebsiteTypes.indianexpress: 'http://indianexpress.com/opinion/',
            WebsiteTypes.theviewspaper: 'http://theviewspaper.net',
        }
        self.allowed_domains = [
            "www.dnaindia.com",
            "www.indianexpress.com",
            "http://theviewspaper.net"
        ]
        super(SpiderWatchDispatch, self).__init__()

    def get_allowed_domains(self):
        return self.allowed_domains

    def get_pagination_websites(self):
        return self.websites.values()

    def parse_from_pagination(self, url, hxs, cache_db, history_db):
        pass
