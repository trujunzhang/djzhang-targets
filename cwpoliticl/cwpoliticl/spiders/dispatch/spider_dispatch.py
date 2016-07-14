from cwpoliticl.items import WebsiteTypes
from cwpoliticl.spiders.dispatch.base_dispatch import BaseDispatch


class SpiderDispatch(BaseDispatch):
    def __init__(self):
        super(SpiderDispatch, self).__init__()

    def parse_from_detail_page(self, url, hxs, views_paper_wd_rpc):
        type = self.websites[url]
        parse = self.parses[type]

        return parse.parse(url, hxs, views_paper_wd_rpc, self._get_access_denied_cookie(type, hxs))

    def _get_access_denied_cookie(self, type, hxs):
        """

        Issue: Access denied | theviewspaper.net used CloudFlare to restrict access
        Because 'theviewspaper.net' need cookie to download all images.

        :param type:
        :param hxs:
        :return:
        """
        if type == WebsiteTypes.theviewspaper:
            return hxs.headers.get('Set-Cookie').split(';', 1)[0]
