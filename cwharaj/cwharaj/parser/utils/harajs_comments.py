# coding=utf-8
from cwharaj.items import Comment, Member


class HarajsComments(object):
    def __init__(self, baseParser, item_db, id_ads):
        super(HarajsComments, self).__init__()
        self.baseParser = baseParser
        self.item_db = item_db
        self.id_ads = id_ads

    def save_for_harajs(self, hxs):
        row_html = self.baseParser.get_value_from_response(hxs, '//*[@class="row "]')

        from BeautifulSoup import BeautifulSoup
        soup = BeautifulSoup(row_html)

        _comments_div = soup.findAll("div", {"class": "comment comment_div"})

        for _comment_div in _comments_div:

            pass
            # _comment_div.find

        _comments_selector = '//*[@class="comment comment_div"]'
        _comments_div = hxs.xpath(_comments_selector)
        count = 0
        for _comment_div in _comments_div:
            _memberName = self.baseParser.get_value_from_response(hxs,
                                                                  _comments_selector + '/div/div/a[@class="username"]/text()',
                                                                  index=count)

            hxs.xpath('//*[@class="comment comment_div"]/div[@class="comment_body"]/text()')

            _content = self.baseParser.get_value_from_response(hxs,
                                                               _comments_selector + '/div[@class="comment_body]/text',
                                                               index=count)

            id_His_response = self.item_db.save_member(Member.get_default(_memberName))
            comment = Comment.get_default(self.id_ads, id_His_response, _content)
            self.item_db.save_comment(comment)

            count += 1
