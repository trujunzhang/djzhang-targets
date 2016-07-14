# coding=utf-8

from cwpoliticl.database.base.mysql_db import MysqlDatabase

class ItemDatabase(MysqlDatabase):
    def __init__(self, host, port, user, passwd, db, collection_name):
        super(ItemDatabase, self).__init__(host, port, user, passwd, db, collection_name)

    def save_item(self, item):
        sql = """ SELECT id FROM xxx WHERE ads_title = '{}'""".format(item['ads_title'])
        _ads_id = self._get_row_id(sql, "ads")
        if _ads_id == "":
            _ads_id = self.insert_for_ads(item)

        item['id_ads'] = _ads_id

        return _ads_id

    def update_item_contact(self, ads_id, image_phone):
        exist = self.check_exist_by_id(ads_id)
        if exist:
            self._update_contact_for_ads(ads_id, image_phone)
