import urlparse

import sys


class BaseParser(object):
    def __init__(self):
        pass

    def parse(self, url, hxs, item_db):
        return None

    def get_value_with_urljoin(self, hxs, query, base, index=0):
        href = self.get_value_response(hxs, query, index)
        href = urlparse.urljoin(base, href.strip())
        return href

    def get_value_response(self, hxs, query, index=0, default=""):
        _list = hxs.xpath(query)
        if len(_list) > index:
            value = _list[index].extract()
            return value
        return default

    def get_all_value_response(self, hxs, query, max_len=sys.maxint, sperator='', start_index=1):
        """
        Get the all value.
        :param hxs:
        :param query:
        :param max_len:
        :param sperator:
        :param start_index:
        :return:
        """
        _list = hxs.xpath(query)
        lines = []

        count = 1
        for line in _list:
            if count < start_index:
                continue

            if len(lines) >= max_len:
                break

            lines.append(line.extract())
            count += 1

        return sperator.join(lines)

    def get_value_from_beautifulsoup(self, container, name=None, attrs={}, index=0, default=""):
        _list = container.findAll(name, attrs)
        if len(_list) > index:
            value = _list[index].text
            return value
        return default

    def get_images_in_selector(self, hxs, selector, index=0, filter_method=None):
        noscript_images = self.get_value_response(hxs, selector, index=index)

        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(noscript_images)

        images = soup.findAll('img')

        list = [""]
        for image in images:
            src_ = image['src']

            result = True

            if filter_method:
                result = filter_method(src_)

            if result:
                list.append(src_)

        return ",".join(list)
