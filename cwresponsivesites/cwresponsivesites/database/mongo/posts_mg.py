import logging
import pymongo


class PostsDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        """

        :param mongo_uri:
        :param mongo_db:
        :param collection_name: "posts"
        """
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def save_post(self, item):
        # step3: convert item to post format
        from cwresponsivesites.items import MongoPost
        mongo_post = MongoPost.convert(item)

        # step4: save post.
        self.open_spider()
        if not self.check_exist(mongo_post):
            self.db[self.collection_name].update_one({'_id': mongo_post['_id']}, {'$set': dict(mongo_post)}, True)
        self.close_spider()

    def check_exist(self, mongo_post):
        cursor = self.db[self.collection_name].find({'_id': mongo_post['_id']})
        if cursor.count():
            return True

        return False
