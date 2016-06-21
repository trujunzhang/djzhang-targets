# coding=utf-8

import logging


class TagItem(object):
    tag_R = ""
    tag_F = ""
    tag_FF = ""
    tag_FF_index = -1

    def __init__(self, sections, item_db):
        super(TagItem, self).__init__()
        self.sections = sections
        self.item_db = item_db
        self.sections_count = len(self.sections)

    def set_tag_FF(self, _tag_FF, x):
        self.tag_FF = _tag_FF
        self.tag_FF_index = x

    def get_index_tag_f(self):
        _tag_f_index = -1

        if self.tag_FF_index != -1:
            _tag_f_index = self.tag_FF_index - 1
        elif self.sections_count >= 2:
            _tag_f_index = -1

        return _tag_f_index

    def get_index_tag_r(self):
        _tag_r_index = -1
        if (self.tag_FF != "") and (self.sections_count == 3):
            # sections: ["2016 xxx","xxx","YYY"]
            if self.tag_FF_index == 2:
                _tag_r_index = 0
            # sections: ["YYY","2016 xxx","xxx"]
            elif self.tag_FF_index == 1:
                _tag_r_index = 2

        if (self.tag_FF != "") and (self.sections_count == 2):
            logging.debug("no tag_r in the sections, count: {}".format(self.sections_count))
            _tag_r_index = -1

        if (self.tag_FF == "") and (self.sections_count >= 1):
            logging.debug("special sections, count: {}".format(self.sections_count))
            _tag_r_index = -1

        return _tag_r_index

    def parse_common_tag_item(self):
        for x in xrange(self.sections_count - 1, -1, -1):
            _split = self.sections[x].split(' ')
            _pre_x = x - 1
            if (len(_split) == 2) and (x != 0):
                _tag_FF = self._parse_tagFF(_split, _pre_x)
                if _tag_FF:
                    self.set_tag_FF(_tag_FF, x)
                    break

    def _parse_tagFF(self, _split, pre_index):
        """
        :param self.sections:  section list
        :param _split:     such as "كامري 2016"
        :param pre_index:  if split's index is 3, pre_index is 2
        :param item_db:    database that implements query.
        :return:           the table year's id on the databse
        """
        _pre_section = self.sections[pre_index]
        _pre_split = _pre_section.split(' ')
        if len(_pre_split) != 1:
            return None

        _year_index = self._get_year_index(_split)
        _name_index = 0
        if _year_index == 0:
            _name_index = 1

        _year = _split[_year_index]
        _tag_f_name = _split[_name_index]

        _pre_tag_f_name = _pre_split[0]
        if _tag_f_name != _pre_tag_f_name:
            return ""

        _tags_FF = self.item_db.get_year_id(_year)
        return _tags_FF

    def _get_year_index(self, _split):
        for index, item in enumerate(_split):
            if len(item) == 4 and item.isdigit():
                return index
