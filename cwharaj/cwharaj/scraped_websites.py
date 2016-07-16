from enum import Enum

from cwharaj.parser.harajsa_parser import HarajSaParse
from cwharaj.parser.mstaml_parser import MstamlParse
from cwharaj.parser.opensooq_parser import OpensooqParse


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    @classmethod
    def get_id_index(self, _url_from):
        if _url_from == WebsiteTypes.opensooq.value:
            return 3
        elif _url_from == WebsiteTypes.mstaml.value:
            return 1
        elif _url_from == WebsiteTypes.harajsa.value:
            return 1

        return -1

    opensooq = "opensooq"
    mstaml = "mstaml"
    harajsa = "harajsa"

    @classmethod
    def get_pagination_url(self, type):
        return scraped_websites_pagination.keys()[scraped_websites_pagination.values().index(type)]


content_seperator = '\n' + '\n'

websites_allowed_domains = {
    WebsiteTypes.opensooq: "https://sa.opensooq.com/",
    WebsiteTypes.mstaml: 'http://www.mstaml.com',
    WebsiteTypes.harajsa: 'https://haraj.com.sa',
}

scraped_websites_pagination = {
    'https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=&page=1': WebsiteTypes.opensooq,
    'http://www.mstaml.com/market/?t=0&l=0&d=0&x=&u=&o=3': WebsiteTypes.mstaml,
    'https://haraj.com.sa': WebsiteTypes.harajsa,
}

websites_parses = {
    WebsiteTypes.opensooq: OpensooqParse(),
    WebsiteTypes.mstaml: MstamlParse(),
    WebsiteTypes.harajsa: HarajSaParse()
}


# ===
# for debug
# ===

def get_crawler_name():
    # Extensions

    is_pagination = True
    # is_pagination = False

    # url_from = WebsiteTypes.opensooq
    # url_from = WebsiteTypes.mstaml
    url_from = WebsiteTypes.harajsa

    crawler_names = [
        # "politicl",
        # "politicl_watch",
        "{}_debug".format(url_from.value)
    ]

    return {
        'name': crawler_names[0],
        'is_pagination': is_pagination
    }


is_pagination = get_crawler_name()['is_pagination']
