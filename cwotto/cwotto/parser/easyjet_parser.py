import json
import urlparse

from cwotto.database.cache_db import CacheDatabase
from cwotto.database.history_db import HistoryDatabase
from cwotto.items import Product, CacheItem, EasyJet
from cwotto.parser.base_parser import BaseParser
from cwotto.parser.otto_products import OttoProducts


class EasyJetParse(BaseParser):
    def __init__(self):
        super(EasyJetParse, self).__init__()

    def parse_item(self, url, hxs):
        block_div = "offer adjustment"

        title = self.extract_by_query(hxs,
                                      '//*[@class="offer adjustment"][1]/*[@class="offer--wrapper"]/header/a/text()')
        url = self.extract_by_query(hxs,
                                    '//*[@class="offer adjustment"][1]/*[@class="offer--wrapper"]/header/a/@href')

        item = EasyJet(
            url=url,
            title=title
        )
        return item
