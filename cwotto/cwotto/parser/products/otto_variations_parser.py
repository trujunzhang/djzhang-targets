class OttoVariationsParser(object):
    def __init__(self, product_json):
        self.product_json = product_json
        super(OttoVariationsParser, self).__init__()

    def get_all_variations_products(self):
        items = []
        __variations = self.product_json['variations']
        for variation in __variations:
            item = self.__parse_product(variation=variation)
            items.append(item)

        return items

    def __parse_product(self, variation):
        pass
