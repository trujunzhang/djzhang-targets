import pymongo


class BaseDatabase(object):
    def __init__(self, host, port, user, passwd, db, collection_name):
        pass

    def open_spider(self):
        pass

    def close_spider(self):
        pass

    def process_item(self, url, item=None, index=0, id=-1):
        pass

    def check_exist_by_id(self, _id):
        return False
