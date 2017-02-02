import logging
import os

Cache_Folder = 'politicl'


class CrawlUtils(object):
    def __init__(self):
        super(CrawlUtils, self).__init__()

    @classmethod
    def get_guid(self, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        from hashlib import md5
        # http://www.utf8-chartable.de/unicode-utf8-table.pl?start=128&number=128&utf8=string-literal&unicodeinhtml=hex
        # _url = _url.replace('\xc3\xb3', '')
        # logging.debug("url {} md5.".format(_url))
        _md5 = ''
        try:
            _md5 = md5(_url.encode('utf-8')).hexdigest()
        except Exception as e:
            pass

        return _md5

    @classmethod
    def get_tmp_folder(cls):
        import tempfile, os
        tmp = os.path.join(tempfile.gettempdir(), Cache_Folder)
        if not os.path.exists(tmp):
            os.makedirs(tmp)

        return tmp

    @classmethod
    def get_tmp_file(cls, filename):
        return '{}/{}'.format(CrawlUtils.get_tmp_folder(), filename)

    @classmethod
    def remove_file(cls, path):
        ## delete only if file exists ##
        if os.path.exists(path):
            os.remove(path)
        else:
            logging.debug("Sorry, I can not remove {} file.".format(path))

    @classmethod
    def get_domain(cls, url):
        from cwresponsivesites.utils import domain_parser
        parse_domain = domain_parser.parse_domain(url)

        site_domain = [parse_domain[2], parse_domain[1], parse_domain[0]]
        if parse_domain[2] == 'www' or parse_domain[2] == '':
            site_domain = [parse_domain[1], parse_domain[0]]

        return '.'.join(site_domain)

    @classmethod
    def get_html_source(cls, url):
        import urllib2
        user_agent = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.63 Safari/534.3'
        headers = {'User-Agent': user_agent}
        req = urllib2.Request(url, None, headers)
        response = urllib2.urlopen(req)
        page = response.read()
        response.close()  # its always safe to close an open connection

        return page
