from enum import Enum

from cwpoliticl.extensions.dailyo_parser import DailyoParser
from cwpoliticl.extensions.deccanchronicle_parser import DeccanchronicleParser
from cwpoliticl.extensions.dnaindia_parser import DnaIndiaParser
from cwpoliticl.extensions.firstpost_parser import FirstPostParser
from cwpoliticl.extensions.indianexpress_parser import IndianExpressParser
from cwpoliticl.extensions.theviewspaper_parser import TheViewsPaperParser


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    dnaindia = "dnaindia"
    indianexpress = "indianexpress"
    theviewspaper = "theviewspaper"
    dailyo = "dailyo"
    deccanchronicle = "deccanchronicle"
    firstpost = "firstpost"

    @classmethod
    def get_pagination_url(self, type):
        return scraped_websites_pagination.keys()[scraped_websites_pagination.values().index(type)]


content_seperator = '\n' + '\n'

websites_allowed_domains = {
    WebsiteTypes.dnaindia: "www.dnaindia.com",
    WebsiteTypes.indianexpress: "www.indianexpress.com",
    WebsiteTypes.theviewspaper: "theviewspaper.net",
    WebsiteTypes.dailyo: 'www.dailyo.in',
    WebsiteTypes.deccanchronicle: 'www.deccanchronicle.com',
    WebsiteTypes.firstpost: 'www.firstpost.com',
}

scraped_websites_pagination = {
    'http://www.dnaindia.com/analysis': WebsiteTypes.dnaindia,
    'http://indianexpress.com/opinion/': WebsiteTypes.indianexpress,
    'http://theviewspaper.net': WebsiteTypes.theviewspaper,
    'http://www.dailyo.in/politics': WebsiteTypes.dailyo,
    'http://www.deccanchronicle.com/opinion': WebsiteTypes.deccanchronicle,
    'http://www.firstpost.com/category/politics': WebsiteTypes.firstpost,
}

websites_parses = {
    WebsiteTypes.dnaindia: DnaIndiaParser(),
    WebsiteTypes.indianexpress: IndianExpressParser(),
    WebsiteTypes.theviewspaper: TheViewsPaperParser(),
    WebsiteTypes.dailyo: DailyoParser(),
    WebsiteTypes.deccanchronicle: DeccanchronicleParser(),
    WebsiteTypes.firstpost: FirstPostParser(),
}

# ===
# Debug
# ===
is_pagination = True
# is_pagination = False
