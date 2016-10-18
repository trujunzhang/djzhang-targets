import json


class VariationTreeJson(object):
    def __init__(self):
        self.debug_folder = "/Users/djzhang/Desktop/VPS/djzhang-targets/cwotto/debug"
        super(VariationTreeJson, self).__init__()

    def get_variation_tree_json(self):
        data = None
        json_file = "{}/{}".format(self.debug_folder, "Apple_iPhone_SE_4/product.json")
        with json_file as data_file:
            data = json.load(data_file)

        return data['variationTree']
