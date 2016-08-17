from enum import Enum

from cwjetbrains.extensions.dailyo_parser import DailyoParser


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    webstorm = "webstorm"

    @classmethod
    def get_pagination_url(cls, type):
        return scraped_websites_pagination.keys()[scraped_websites_pagination.values().index(type)]


content_seperator = '\n' + '\n'

websites_allowed_domains = {
    WebsiteTypes.webstorm: 'https://www.jetbrains.com/',
}

scraped_websites_pagination = {
    # ==Done
    # 1	DailyO ('http://www.dailyo.in/politics')
    'http://www.dailyo.in/politics': WebsiteTypes.webstorm,
}

websites_parses = {
    WebsiteTypes.webstorm: DailyoParser(),
}


# ===
# for debug
# ===



def get_crawler_name():
    # Extensions

    is_pagination = True
    # is_pagination = False

    url_from = WebsiteTypes.webstorm

    crawler_names = [
        # "jetbrains",
        "jetbrains_debug"
        # "jetbrains_watch",
    ]

    return {
        'url_from': url_from,
        'url_pagination': WebsiteTypes.get_pagination_url(url_from),
        'name': crawler_names[0],
        'is_pagination': is_pagination
    }


is_pagination = get_crawler_name()['is_pagination']


# https://data.services.jetbrains.com/products/download?code=WS&platform=mac
# https://data.services.jetbrains.com/products/download?code=PCP&platform=mac
