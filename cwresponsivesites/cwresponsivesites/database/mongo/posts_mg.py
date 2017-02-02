import logging
import pymongo


class PostsDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name, topics_filter_keys):
        """

        :param mongo_uri:
        :param mongo_db:
        :param collection_name: "posts"
        :param topics_filter_keys: "TOPICS_FILTER_KEYS":"Opinion,India,Politics,News,Society,Porn,Fuck,Sex",
        """
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name
        from cwresponsivesites.database.mongo.topics_mg import TopicsDatabase
        self.topics_db = TopicsDatabase(mongo_uri, mongo_db, 'topics')
        self.topics_filter_keys = topics_filter_keys

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def save_or_update_topics(self, topicsName):
        topic_ids = []
        for topicName in topicsName:
            topic_id = self.topics_db.save_topics(topicName, self.topics_filter_keys)
            topic_ids.append(topic_id)
        return topic_ids

    def save_post(self, item):
        # step1: save topics.
        topic_ids = self.save_or_update_topics(item['topicsName'])

        # step3: convert item to post format
        from cwresponsivesites.items import MongoPost
        mongo_post = MongoPost.convert(item, topic_ids=topic_ids)

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

    def __get_topicIds(self, topics):
        topic_ids = []
        for tag in topics:
            topic_ids.append(tag['_id'])

        return topic_ids
