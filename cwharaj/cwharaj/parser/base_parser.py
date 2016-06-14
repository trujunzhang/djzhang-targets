import urlparse


class BaseParser(object):
    def __init__(self):
        pass

    def parse(self, url, hxs, phoneNumberSet=None):
        return None

    def parse_relative(self, url, hxs):
        pass

    def get_value_from_response_with_urljoin(self, hxs, query, base, index=0):
        href = self.get_value_from_response(hxs, query, index)
        href = urlparse.urljoin(base, href.strip())
        return href

    def get_value_from_response(self, hxs, query, index=0, default=""):
        _list = hxs.xpath(query)
        if len(_list) > index:
            value = _list[index].extract()
            return value.encode('utf-8')
        return default

    def get_all_value_from_response(self, hxs, query):
        _list = hxs.xpath(query)
        value = ""
        for line in _list:
            value += line.extract()

        return value.encode('utf-8')

    def get_images_in_selector(self, hxs, selector, index=0, filter_method=None):
        noscript_images = self.get_value_from_response(hxs, selector, index=index)

        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(noscript_images)

        images = soup.findAll('img')

        list = []
        for image in images:
            src_ = image['src']

            result = True

            if filter_method:
                result = filter_method(src_)

            if result:
                list.append(src_)

        return ",".join(list)
