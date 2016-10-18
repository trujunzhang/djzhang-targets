import json

from cwotto.parser.base_parser import BaseParser


class OttoChildren(object):
    def __init__(self, hxs, url, product_json, variationId):
        self.hxs = hxs
        self.url = url
        self.product_json = product_json
        self.variationId = variationId
        super(OttoChildren, self).__init__()



