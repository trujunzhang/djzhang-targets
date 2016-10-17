import urllib2
import logging
import os
import json


class ReviewFetcher(object):
    def __init__(self, productId):
        super(ReviewFetcher, self).__init__()
        self.review_url = "https://www.otto.de/product-customerreview/reviews/presentation/product/{}".format(productId)

    def fetch_reviews_as_json(self):

        reviews = []
        req = urllib2.Request(self.review_url, None, {'User-Agent': 'Mozilla/5.0'})

        data = None
        try:
            data = urllib2.urlopen(req).read()
        except Exception, e:
            logging.debug("  Downloading photo failure, {}, item: {}".format(e, self.review_url))

        if data:
            reviews_json = json.loads(data)
            if reviews_json:
                reviews = reviews_json['items']

        return reviews
