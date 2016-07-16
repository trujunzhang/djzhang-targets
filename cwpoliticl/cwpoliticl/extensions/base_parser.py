import sys

import logging


class BaseParser(object):
    def __init__(self):
        pass

    def _add_url_scheme(self, thumbnail_src):
        if not 'http:' in thumbnail_src:
            thumbnail_src = 'http:{}'.format(thumbnail_src)

        return thumbnail_src

    def get_value_with_urljoin(self, hxs, query, base, index=0):
        href = self.get_value_response(hxs, query, index)
        return self.get_url_join(href, base)

    def get_url_join(self, href, base):
        import urlparse
        return urlparse.urljoin(base, href.strip())

    def get_value_response(self, hxs, query, index=0, default=""):
        _list = []

        try:
            _list = hxs.xpath(query)
        except Exception, e:
            logging.debug("  get value via xpath failure, {}".format(e))

        if len(_list) > index:
            value = _list[index].extract()
            return value
        return default

    def get_all_value_response(self, hxs, query, max_len=2, seperator=None, start_index=0):
        """
        Get the all value.
        :param hxs:
        :param query:
        :param max_len:
        :param seperator:
        :param start_index:
        :return:
        """

        if not seperator:
            from cwpoliticl.scraped_websites import content_seperator
            seperator = content_seperator

        _list = hxs.xpath(query)
        lines = []

        for idx, line in enumerate(_list):
            if idx >= start_index:
                if len(lines) >= max_len:
                    break

                lines.append(line.extract())

        return seperator.join(lines)

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
