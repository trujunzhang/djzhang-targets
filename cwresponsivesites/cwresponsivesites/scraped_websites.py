# coding=utf-8
from enum import Enum

from cwresponsivesites.extensions.dailyo_parser import DailyoParser
from cwresponsivesites.extensions.dailypioneer_parser import DailyPioneerParser
from cwresponsivesites.extensions.deccanchronicle_parser import DeccanchronicleParser
from cwresponsivesites.extensions.dnaindia_parser import DnaIndiaParser
from cwresponsivesites.extensions.economictimes_blogs_parser import EconomictimesBlogsParser
from cwresponsivesites.extensions.economictimes_interview_parser import EconomictimesInterviewParser
from cwresponsivesites.extensions.financialexpress_parser import FinancialExpressParser
from cwresponsivesites.extensions.firstpost_parser import FirstPostParser
from cwresponsivesites.extensions.forbesindia_parser import ForbesindiaParser
from cwresponsivesites.extensions.frontline_parser import FrontLineParser
from cwresponsivesites.extensions.hindustantimes_parser import HindustantimesParser
from cwresponsivesites.extensions.huffingtonpost_parser import HuffingtonPostParser
from cwresponsivesites.extensions.indianexpress_parser import IndianExpressParser
from cwresponsivesites.extensions.indiatoday_parser import IndiaTodayParser
from cwresponsivesites.extensions.livemint_mintonsunday_parser import LiveMintmintonsundayParser
from cwresponsivesites.extensions.livemint_opinion_parser import LiveMintOpinionParser
from cwresponsivesites.extensions.ndtv_parser import NdtvParser
from cwresponsivesites.extensions.newindianexpress_parser import NewIndianExpressParser
from cwresponsivesites.extensions.news18_parser import News18Parser
from cwresponsivesites.extensions.outlookindia_magazine_parser import OutlookIndiaMagazineParser
from cwresponsivesites.extensions.outlookindia_website_parser import OutlookIndiaWebsiteParser
from cwresponsivesites.extensions.rediff_parser import RediffParser
from cwresponsivesites.extensions.scroll_parser import ScrollParser
from cwresponsivesites.extensions.telegraphindia_parser import TelegraphIndiaParser
from cwresponsivesites.extensions.thehindu_parser import TheHinduParser
from cwresponsivesites.extensions.thehindubusinessline_parser import ThehInduBusinesslineParser
from cwresponsivesites.extensions.theindianeconomist_parser import TheIndianEconomistParser
from cwresponsivesites.extensions.thepoliticalindian_parser import ThePoliticalIndianParser
from cwresponsivesites.extensions.theviewspaper_parser import TheViewsPaperParser
from cwresponsivesites.extensions.thewire_parser import TheWireParser
from cwresponsivesites.extensions.timesofindia_parser import TimesOfIndiaParser
from cwresponsivesites.extensions.tribuneindia_parser import TribuneIndiaParser
from cwresponsivesites.utils.date_utils import DateUtils


def get_crawler_name():
    # Extensions

    # is_pagination = True
    is_pagination = False

    crawler_names = [
        # "politicl",
        # "politicl_debug"
        # "politicl_watch",
        # "politicl_maintain",
        #     example
        "kaismh"
    ]

    return {
        'name': crawler_names[0],
    }


is_pagination = get_crawler_name()['is_pagination']
