import urlparse


class BaseParser(object):
    def __init__(self):
        pass

    def parse(self, url, hxs):
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
            return value
        return default

    def get_all_value_from_response(self, hxs, query):
        _list = hxs.xpath(query)
        value = ""
        for line in _list:
            value += line.extract()

        return value

    def get_images_from_noscript(self, hxs, index=0):
        noscript_images = self.get_value_from_response(hxs, '//noscript', index=index)

        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(noscript_images)

        images = soup.findAll('img')

        list = []
        for image in images:
            list.append(image['src'])

        return list
