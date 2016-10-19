import json
import urlparse

from cwotto.database.cache_db import CacheDatabase
from cwotto.database.history_db import HistoryDatabase
from cwotto.items import Product
from cwotto.parser.base_parser import BaseParser
from cwotto.parser.otto_products import OttoProducts


class OttoParse(BaseParser):
    def __init__(self):
        self.history_db = HistoryDatabase()

        super(OttoParse, self).__init__()

    def parse_paginate(self, url, hxs):

        product_links = []
        links = hxs.xpath('//*[@class="product small"]/a/@href').extract()

        # linke is like href="/p/ajc-kurzblazer-552791036/#variationId=552791094">
        for link in links:
            appLink = urlparse.urljoin(url, link.strip())

            if not self.history_db.check_history_exist(link.strip()):  # ignore it, If the link already exist
                product_links.append(appLink)

        return product_links

    def parse_item(self, url, hxs, variation_id):
        productScript = self.extract_by_query(hxs, "//script[@id='productDataJson']").replace("</script>", "").replace(
            '<script id="productDataJson" type="application/json">', "")

        productScript = productScript.replace('#ft5_slash#', '/')
        productScript = productScript.replace('?$articlecolorthumbsmall$', '')
        productScript = productScript.replace('?${format}$', '')

        product_json = json.loads(productScript)

        product_id = product_json['id']

        _otto_products = OttoProducts()
        _is_single_product = _otto_products.check_single_product_without_variables(product_json)

        product = {}
        if _is_single_product:
            product = _otto_products.get_single_product(hxs, url, product_json, product_id, variation_id)
        else:
            product = _otto_products.get_product_with_variables(hxs, url, product_json, product_id, variation_id)

        return product
