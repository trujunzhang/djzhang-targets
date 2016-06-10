import urlparse


class BaseParser(object):
    def __init__(self):
        pass

    def parse(self, url, hxs):
        return None

    def parse_relative(self, url, hxs):
        pass

    def get_section(self, section_panel):
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

    def get_images_in_selector(self, hxs, selector, index=0):
        noscript_images = self.get_value_from_response(hxs, selector, index=index)

        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(noscript_images)

        images = soup.findAll('img')

        list = []
        for image in images:
            list.append(image['src'])

        return list

    def get_published_date(self, comment_header_string):
        """Because the published date is not contained by any tag.
        So we can't use xpath to select it."""

        published_date = ""

        # step 1: remove class called "comment_header"
        comment_header_string = comment_header_string.replace('<div class=" comment_header">', '')
        comment_header_string = comment_header_string.replace("\n", "").replace("\r", "")

        # step 2: split it by "<br>", so we can get the first block.
        blocks = comment_header_string.split('<br>')

        # Basically, the length of blocks must be 3.
        if len(blocks) == 3:
            first_block = blocks[0]

            # Finally, remove all <a> blocks, that the result is the published date string.
            from BeautifulSoup import BeautifulSoup
            soup = BeautifulSoup(first_block)

            _As = soup.findAll('a')

            for a in _As:
                a.replaceWith('')

            published_date = soup.prettify().replace("\n", "").replace("\r", "")

        return published_date
