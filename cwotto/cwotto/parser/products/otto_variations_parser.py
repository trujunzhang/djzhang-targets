from cwotto.items import Product


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
        url = variation['link']['href']
        product_id = variation['id']
        title = variation['name']

        regular_price = variation['displayPrice']['comparativePriceAmount'].replace(',', '.')
        price = variation['displayPrice']['priceAmount'].replace(',', '.')

        featured_image = variation['images']['uriTemplate']
        product_gallery = variation['alternativeImageList']['images']

        return Product.get_variable_product(url, product_id, title, regular_price, price,
                                            featured_image, product_gallery)

    def _get_product_gallery(self, variation):
        result = []
        _images = variation['alternativeImageList']['images']
        for image in _images:
            result.append(image['uriTemplate'])

        return result
