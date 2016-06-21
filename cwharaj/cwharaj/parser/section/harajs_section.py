# coding=utf-8
from cwharaj.parser.section.harajs_tag_item import TagItem
from cwharaj.parser.section.section_item import SectionItem
import logging


class HarajsSection(object):
    def __init__(self, sections, item_db):
        super(HarajsSection, self).__init__()
        self.sections = sections
        self.item_db = item_db
        self.section_item = SectionItem(self.item_db)
        self.tag_item = TagItem(sections, item_db)

    def get_section_item(self):
        if len(self.sections) >= 4:
            logging.debug("special sections, count: {}".format(len(self.sections)))
            return None

        """
        length is only 1, that the section is tag_R.
        """
        if len(self.sections) == 1:
            self._get_tag_r(self.sections[0])

        """
        length is 3 or 2.
        """
        self.tag_item.get_common_tag_item()

        """
        finally,generate section item.
        """
        self.section_item.set_item(self.tag_item)

        return self.section_item

    def _get_tag_r(self, name):
        _item = self.item_db.get_section(name)
        self.tag_item.tag_R = _item['id']
        self.section_item.type_ads_other_final = _item['Contents']
