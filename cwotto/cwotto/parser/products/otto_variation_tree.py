import json

from cwotto.parser.base_parser import BaseParser


class OttoVariationTree(object):
    def __init__(self, variation_tree_json):
        self.variation_tree_json = variation_tree_json
        super(OttoVariationTree, self).__init__()

    def get_variation_tree(self):
        pass
