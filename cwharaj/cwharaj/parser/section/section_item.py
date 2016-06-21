class SectionItem(object):
    ads_tags_R = ""
    ads_tags_F = ""
    ads_tags_FF = ""
    type_ads_other_final = ""
    un_model = ""

    def __init__(self, item_db):
        super(SectionItem, self).__init__()
        self.item_db = item_db

    def set_item(self, tag_item):
        self.ads_tags_R = tag_item._ads_tags_R
        self.ads_tags_F = tag_item._ads_tags_F
        self.ads_tags_FF = tag_item._ads_tags_FF

        if self.ads_tags_FF:
            self.un_model = "model"


class TagFItem(object):
    tag_R = ""
    tag_F = ""
    tag_FF = ""
    tag_FF_index = -1

    def __init__(self):
        super(TagFItem, self).__init__()
