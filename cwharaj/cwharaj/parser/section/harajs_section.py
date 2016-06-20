# coding=utf-8
from cwharaj.parser.section.section_item import SectionItem


class HarajsSection(object):
    """
    types:
    t1:
       ES-ES2016-(xxx)
       F-(years)FF-R
    t2:
       ES-ES2001-FS-FS2001
       F-(years)FF-R
    """

    def __init__(self):
        super(HarajsSection, self).__init__()

    def get_section_item(self, _sections, item_db):
        _section_item = SectionItem()

        self.get_tagF(_sections, item_db)

        return _section_item

    def get_tagF(self, _sections, item_db):
        _tag_FFs = []
        for x in xrange(len(_sections) - 1, -1, -1):
            _split = _sections[x].split(' ')
            _pre_x = x - 1
            if (len(_split) == 2) and (x != 0):
                _tag_FF = self.parse_tagFF(_sections, _split, _pre_x, item_db)
                _tag_FFs.append(_tag_FF)

    def parse_tagFF(self, _sections, _split, pre_index, item_db):
        """
        :param _sections:  section list
        :param _split:     such as "كامري 2016"
        :param pre_index:  if split's index is 3, pre_index is 2
        :param item_db:    database that implements query.
        :return:
        """
        _pre_section = _sections[pre_index]
        _pre_split = _pre_section.split(' ')
        if len(_pre_split) != 1:
            return None

        _year_index = self.get_year_index(_split)
        _name_index = 0
        if _year_index == 0:
            _name_index = 1

        _year = _split[_year_index]
        _tag_f_name = _split[_name_index]

        _pre_tag_f_name = _pre_split[0]
        if _tag_f_name != _pre_tag_f_name:
            return None

        _tags_FF = item_db.get_year_id(_year)
        _xxx = len(_pre_split)

    def get_year_index(self, _split):
        for index, item in enumerate(_split):
            if len(item) == 4 and item.isdigit():
                return index
