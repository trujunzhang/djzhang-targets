# coding=utf-8
from cwharaj.items import Comment, Member


class HarajsComments(object):
    def __init__(self, baseParser, item_db, id_ads):
        super(HarajsComments, self).__init__()
        self.baseParser = baseParser
        self.item_db = item_db
        self.id_ads = id_ads

    def save_for_harajs(self, hxs):
        row_html = self.baseParser.get_value_response(hxs, '//*[@class="row "]')

        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(row_html)

        _comments_div = soup.findAll("div", {"class": "comment comment_div"})

        for _comment_div in _comments_div:
            _memberName = self.baseParser.get_value_from_beautifulsoup(_comment_div, "a", {"class": "username"})
            _content = self.baseParser.get_value_from_beautifulsoup(_comment_div, "div", {"class": "comment_body"})

            id_His_response = self.item_db.save_member(Member.get_default(_memberName))
            comment = Comment.get_default(self.id_ads, id_His_response, _content)
            self.item_db.save_comment(comment)

    def save_for_opensooq(self, hxs):
        _comments_selector = '//*[@class="commentItems clear"]/li'
        _comments_div = hxs.xpath(_comments_selector)

        _count = 1
        for _comment_div in _comments_div:
            _selector = _comments_selector + '[' + _count + ']'
            _memberName = self.baseParser.get_value_response(hxs, _selector + '/div/a/text()')
            _content = self.baseParser.get_value_response(hxs, _selector + '/div/div[2]/p/text()')

            id_His_response = self.item_db.save_member(Member.get_default(_memberName))
            comment = Comment.get_default(self.id_ads, id_His_response, _content)
            # self.item_db.save_comment(comment)

            _count += 1
