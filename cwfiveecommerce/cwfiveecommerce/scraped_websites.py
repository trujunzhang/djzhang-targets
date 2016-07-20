from enum import Enum

from cwfiveecommerce.extensions.bioliteenergy_parser import DailyoParser, BioliteEnergyParser


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    bioliteenergy = "bioliteenergy"

    @classmethod
    def get_pagination_url(cls, type):
        return scraped_websites_pagination.keys()[scraped_websites_pagination.values().index(type)]


content_seperator = '\n' + '\n'

websites_allowed_domains = {
    WebsiteTypes.bioliteenergy: 'www.bioliteenergy.com',
}

scraped_websites_pagination = {
    # ==Done
    # 1	DailyO ('http://www.dailyo.in/politics')
    'http://www.bioliteenergy.com/products': WebsiteTypes.bioliteenergy,
}

websites_parses = {
    WebsiteTypes.bioliteenergy: BioliteEnergyParser(),
}

scraped_whole_pages_pagination = {
    WebsiteTypes.bioliteenergy.value: 'http://www.bioliteenergy.in/politics?page={}'
}


# ===
# for debug
# ===



def get_crawler_name():
    # Extensions

    is_pagination = True
    # is_pagination = False

    url_from = WebsiteTypes.bioliteenergy

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
