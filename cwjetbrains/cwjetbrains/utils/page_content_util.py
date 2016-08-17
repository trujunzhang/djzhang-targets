class PageContentUtil(object):
    def __init__(self):
        super(PageContentUtil, self).__init__()

    def get_paragraphs_lines(self, source):
        from BeautifulSoup import BeautifulSoup

        soup = BeautifulSoup(source)

        lines = []
        p_tags = soup.findAll('p')
        for tag in p_tags:
            lines.append(tag.text)

        return lines

    def get_limit_page_content(self, list):
        max_len = self._adjust_line_max_size(list)

        lines = []
        for idx, line in enumerate(list):
            if len(lines) >= max_len:
                break

            lines.append(line.replace('\n', '').replace('\r', ''))

        return self._get_content(list, max_len, lines)

    def _get_content(self, list, max_len, lines):
        from cwjetbrains.scraped_websites import content_seperator
        seperator = content_seperator

        content = seperator.join(lines)
        while True:
            if (len(content) < 600) and (len(list) > max_len):
                lines.append(list[max_len].replace('\n', '').replace('\r', ''))
                max_len += 1
                content = seperator.join(lines)
            else:
                break

        return content

    def _adjust_line_max_size(self, list):
        line_size = 150
        max_len = 2

        for idx, line in enumerate(list):
            if idx >= max_len:
                break

            if len(line) <= line_size:  # one of the two lines's size is less than the min size.
                max_len += 1

        if max_len == 3:  # If the third line is still little
            if len(list) > 3:
                if len(list[3]) <= line_size:
                    max_len += 1

        return max_len
