from cwpoliticl.items import WebsiteTypes


class SpiderWatchDispatch(object):
    def __init__(self):
        self.websites = {
            'http://www.dnaindia.com/analysis': WebsiteTypes.dnaindia,
            'http://indianexpress.com/opinion/': WebsiteTypes.indianexpress,
            'http://theviewspaper.net': WebsiteTypes.theviewspaper,
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
        return self.websites.keys()

    def parse_from_pagination(self, url, hxs, cache_db, history_db):
        pass
