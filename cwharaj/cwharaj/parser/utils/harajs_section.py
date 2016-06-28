# coding=utf-8
import logging

from cwharaj.items import Section
from cwharaj.parser.utils.harajs_tag_item import TagItem
from cwharaj.parser.utils.section_item import SectionItem


class HarajsSection(object):
    def __init__(self, sections, item_db):
        super(HarajsSection, self).__init__()
        self.sections = sections
        self.item_db = item_db
        self.section_item = SectionItem(self.item_db)
        self.tag_item = TagItem(sections, item_db)

    def get_section_item_for_mstaml(self):
        return self.section_item

    def get_section_item_for_opensooq(self):
        """
        The length of sections is always 4.
        We just need the last two sections.
        :return:
        """
        self._get_tag_r(self.sections[3])
        self._get_tag_f(self.sections[2])

        # """
        # finally,generate section item.
        # """
        self.section_item.set_item(self.tag_item)

        return self.section_item

    def get_section_item_for_harajsa(self):
        if len(self.sections) == 2:
            """
            the left of the browser is tags_r,
            so index 1 is tags_r's name.
            """
            self._get_tag_r(self.sections[1])
            self._get_tag_f(self.sections[0])

        elif len(self.sections) == 3:
            self.tag_item.parse_year_tag()

            _tag_r_index = self.tag_item.get_index_tag_r()
            self._get_tag_r(self.sections[_tag_r_index])

            _tag_f_index = self.tag_item.get_index_tag_f()
            self._get_tag_f(self.sections[_tag_f_index])


        elif len(self.sections) >= 4:
            logging.debug("special sections, count: {}".format(len(self.sections)))

        # """
        # finally,generate section item.
        # """
        self.section_item.set_item(self.tag_item)

        return self.section_item

    def _get_tag_r(self, _name):
        _item = self.item_db.save_section(Section.get_default(_name))
        self.tag_item.tag_R = _item['id']

    def _get_tag_f(self, _name):
        _item = self.item_db.save_section(Section.get_default(_name, self.tag_item.tag_R))
        self.tag_item.tag_F = _item['id']
        self.section_item.type_ads_other_final = _item['Contents']
