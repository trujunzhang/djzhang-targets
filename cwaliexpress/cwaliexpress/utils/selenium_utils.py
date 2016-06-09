import logging


class SeleniumUtils(object):
    def __init__(self):
        super(SeleniumUtils, self).__init__()

    @classmethod
    def find_a_href(self, categories, param):
        for category in categories:
            href = category.get_attribute("href")
            text = category.text
            if text in "Smart Watches":
                logging.debug("find a's title <%s>" % text)
                return href

