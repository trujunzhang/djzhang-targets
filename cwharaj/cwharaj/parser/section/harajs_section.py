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
        return _section_item
