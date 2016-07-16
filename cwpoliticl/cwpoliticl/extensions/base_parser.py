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

    def ajax(self, ajax_url):
        import requests
        r = requests.get(ajax_url)
        if r.status_code == 200:
            return r.text

    def ajax_json(self, ajax_url):
        string = self.ajax(ajax_url)
        if string:
            import json
            return json.loads(string)

    def get_image_from_srcset(self, hxs, selector):
        image = self.get_value_response(hxs, selector)
        srcset = image.split(',')
        if len(srcset) > 0:
            src_format = srcset[len(srcset) - 1].strip()
            src_split = src_format.split(' ')
            if len(src_split) == 2:
                return src_split[0]

        return ""

    def get_image_src_from_bg(self, hxs, selector):
        image_style = self.get_value_response(hxs, selector)
        self.get_image_scr_from_style(image_style)

    def get_image_scr_from_style(self, style_content):
        import cssutils

        style = cssutils.parseStyle(style_content)
        url = style['background-image']
        url = url.replace("'", '').replace('"', '')
        url = url.replace('url(', '').replace(')', '')
        return url
