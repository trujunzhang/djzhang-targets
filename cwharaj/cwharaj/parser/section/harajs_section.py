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
        self.get_tagF(_sections)
        return _section_item

    def get_tagF(self, _sections):
        _len = len(_sections)
        for x in xrange(0, _len):
            _section = _sections[_len - 1 - x]
            _split = _section.split(' ')
            __len = len(_split)

    def exist_tagFF(self, _sections, _split, pre_index):
        _pre_section = _sections[pre_index]
        _pre_split = _pre_section.split(' ')
        if len(_pre_split) != 1:
            return None

        _pre_tag_f_name = _pre_split[0]
        _year = _split[0]
        _tag_f_name = _split[1]
        if _tag_f_name != _pre_tag_f_name:
            return None
