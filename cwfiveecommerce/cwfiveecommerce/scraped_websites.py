from enum import Enum

from cwfiveecommerce.extensions.dailyo_parser import DailyoParser

class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    dailyo = "dailyo"

    @classmethod
    def get_pagination_url(cls, type):
        return scraped_websites_pagination.keys()[scraped_websites_pagination.values().index(type)]


content_seperator = '\n' + '\n'

websites_allowed_domains = {
    WebsiteTypes.dailyo: 'www.dailyo.in',
}

scraped_websites_pagination = {
    # ==Done
    # 1	DailyO ('http://www.dailyo.in/politics')
    'http://www.dailyo.in/politics': WebsiteTypes.dailyo,
}

websites_parses = {
    WebsiteTypes.dailyo: DailyoParser(),
}

scraped_whole_pages_pagination = {
    WebsiteTypes.dailyo.value: 'http://www.dailyo.in/politics?page={}'
}


# ===
# for debug
# ===



def get_crawler_name():
    # Extensions

    is_pagination = True
    # is_pagination = False

    url_from = WebsiteTypes.dailyo


    crawler_names = [
        # "fiveecommerce",
         "fiveecommerce_debug"
        # "fiveecommerce_watch",
    ]

    return {
        'url_from': url_from,
        'url_pagination': WebsiteTypes.get_pagination_url(url_from),
        'name': crawler_names[0],
        'is_pagination': is_pagination
    }


is_pagination = get_crawler_name()['is_pagination']
