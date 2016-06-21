class SectionItem(object):
    ads_tags_R = ""
    ads_tags_F = ""
    ads_tags_FF = ""
    type_ads_other_final = ""
    un_model = ""

    def __init__(self, item_db):
        super(SectionItem, self).__init__()
        self.item_db = item_db

    def set_item(self, _ads_tags_R, _ads_tags_F, _ads_tags_FF):
        self.ads_tags_R = _ads_tags_R
        self.ads_tags_F = _ads_tags_F
        self.ads_tags_FF = _ads_tags_FF

        if _ads_tags_FF:
            self.un_model = "model"


class TagFItem(object):
    tag_F = ""
    tag_FF = ""

    def __init__(self):
        super(TagFItem, self).__init__()
