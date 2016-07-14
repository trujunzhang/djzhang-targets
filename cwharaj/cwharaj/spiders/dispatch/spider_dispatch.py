from cwharaj.items import WebsiteTypes
from cwharaj.spiders.dispatch.base_dispatch import BaseDispatch


class SpiderDispatch(BaseDispatch):
    def __init__(self):
        super(SpiderDispatch, self).__init__()

    def _get_detail_page_type(self, url):
        import urlparse
        hostname = urlparse.urlparse(url).hostname

        for homepage in self.websites:
            if hostname in homepage:
                return self.websites[homepage]

        pass

    def parse_from_detail_page(self, url, hxs, wd_rpc, cache_item):
        """

        Parsing the detail page.

        :param url:
        :param hxs:
        :param wd_rpc:
        :return:
        """

        type = self._get_detail_page_type(url)
        if type:
            return self.parses[type].parse(url, hxs, wd_rpc,
                                           cache_item['thumbnail_url'],
                                           )
