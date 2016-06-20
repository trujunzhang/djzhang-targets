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
        _count = len(_sections)
        for x in xrange(_count - 1, -1, -1):
            _section = _sections[x]
            _split = _section.split(' ')
            _len = len(_split)
            if (_len == 2) and (x != 0):
                self.parse_tagFF(_sections, _split, x - 1, item_db)

    def parse_tagFF(self, _sections, _split, pre_index, item_db):
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
