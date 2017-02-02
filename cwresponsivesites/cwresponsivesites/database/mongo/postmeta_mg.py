import logging
import pymongo


class PostMetaDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def save_postmeta(self, image_uuid, image_link, image_meta):
        logging.debug("  image_meta: {} ".format(image_meta))

        self.open_spider()

        from cwresponsivesites.items import PostMeta
        item = PostMeta.get_default(image_uuid, image_link, image_meta)
        self.db[self.collection_name].update_one({'_id': item['_id']}, {'$set': dict(item)}, True)

        self.close_spider()
        return item["_id"]

    def check_exist(self, mongo_post):
        cursor = self.db[self.collection_name].find({'_id': mongo_post['_id']})
        if cursor.count():
            return True

        return False
