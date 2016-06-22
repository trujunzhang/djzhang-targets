# coding=utf-8

class HarajsComments(object):
    def __init__(self, baseParser, item_db, id_ads):
        super(HarajsComments, self).__init__()
        self.baseParser = baseParser
        self.item_db = item_db
        self.id_ads = id_ads

    def _parse_comments_for_harajs(self, hxs):
        _comments = []
        _comments_selector = '//*[@class="comment comment_div"]'
        _comments_div = hxs.xpath(_comments_selector)
        for _comment_div in _comments_div:
            _user = self.baseParser.get_value_from_response(_comments_selector + '/div/div/a/text()')


        return _comments

    def save_for_harajs(self, hxs):
        _comments = self._parse_comments_for_harajs(hxs)
