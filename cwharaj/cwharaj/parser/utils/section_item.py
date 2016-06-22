# coding=utf-8
class SectionItem(object):
    ads_tags_R = ""
    ads_tags_F = ""
    ads_tags_FF = ""
    type_ads_other_final = ""
    un_model = ""

    def __init__(self, item_db=None):
        super(SectionItem, self).__init__()
        self.item_db = item_db

    def set_item(self, tag_item):
        self.ads_tags_R = tag_item.tag_R
        self.ads_tags_F = tag_item.tag_F
        self.ads_tags_FF = tag_item.tag_FF

        if self.ads_tags_FF:
            self.un_model = "model"

    @classmethod
    def get_default(self):
        item = SectionItem()
        item.ads_tags_R = 1
        item.ads_tags_F = 13
        item.ads_tags_FF = 60

        return item
