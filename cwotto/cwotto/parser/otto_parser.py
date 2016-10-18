import json
import urlparse

from cwotto.items import Product
from cwotto.parser.base_parser import BaseParser
from cwotto.parser.otto_products import OttoProducts


class OttoParse(BaseParser):
    def __init__(self):
        super(OttoParse, self).__init__()

    def parse_paginate(self, url, hxs):
        product_links = []
        links = hxs.xpath('//*[@class="product small"]/a/@href').extract()
        count = 0
        for link in links:
            if count >= 10:
                break
            count = count + 1
            appLink = urlparse.urljoin(url, link.strip())
            product_links.append(appLink)

        return product_links

    def parse_item(self, url, hxs, variationId):
        productScript = self.extract_by_query(hxs, "//script[@id='productDataJson']").replace("</script>", "").replace(
            '<script id="productDataJson" type="application/json">', "")

        productScript = productScript.replace('#ft5_slash#', '/')
        productScript = productScript.replace('?$articlecolorthumbsmall$', '')
        productScript = productScript.replace('?${format}$', '')

        product_json = json.loads(productScript)

        product_id = product_json['id']

        _otto_products = OttoProducts(hxs, url, product_json, product_id, variationId)

        return self._parse_common(url, product_id, _otto_products)

    def _parse_common(self, url, product_id, _otto_products):

        # child products
        children = _otto_products.get_variations_products()

        # Some product only have size or color.
        # So we need to get available attributes from children
        available_attributes = _otto_products.get_available_attributes()

        # Parent product
        parent = Product.get_parent_product(url=url,
                                            product_id=product_id,
                                            title=_otto_products.get_title(),
                                            uniqueHtmlDetails=_otto_products.get_product_description(),
                                            available_attributes=available_attributes)

        return {"parent": parent, "children": children}
