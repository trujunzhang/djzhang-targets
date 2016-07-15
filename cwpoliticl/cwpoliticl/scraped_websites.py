from enum import Enum

from cwpoliticl.extensions.dnaindia_parser import DnaIndiaParser
from cwpoliticl.extensions.indianexpress_parser import IndianExpressParser
from cwpoliticl.extensions.theviewspaper_parser import TheViewsPaperParser


class WebsiteTypes(Enum):
    def __str__(self):
        return str(self.value)

    dnaindia = "dnaindia"
    indianexpress = "indianexpress"
    theviewspaper = "theviewspaper"
    dailyo = "dailyo"


websites_allowed_domains = {
    WebsiteTypes.dnaindia: "www.dnaindia.com",
    WebsiteTypes.indianexpress: "www.indianexpress.com",
    WebsiteTypes.theviewspaper: "theviewspaper.net",
    WebsiteTypes.dailyo: 'www.dailyo.in',
}

scraped_websites = {
    'http://www.dnaindia.com/analysis': WebsiteTypes.dnaindia,
    'http://indianexpress.com/opinion/': WebsiteTypes.indianexpress,
    'http://theviewspaper.net': WebsiteTypes.theviewspaper,
    'http://www.dailyo.in/politics': WebsiteTypes.dailyo,
}

websites_parses = {
    WebsiteTypes.dnaindia: DnaIndiaParser(),
    WebsiteTypes.indianexpress: IndianExpressParser(),
    WebsiteTypes.theviewspaper: TheViewsPaperParser(),
}
