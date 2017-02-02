import logging
import pymongo


class TopicsDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def save_topics(self, topic_name, topics_filter_keys):
        self.open_spider()

        from cwresponsivesites.items import TopicItem
        topic_item = TopicItem.get_default(topics_filter_keys, topic_name)

        last_item = self.find_one_item(topic_item)
        if last_item:
            self.db[self.collection_name].update(
                {'_id': last_item['_id']},
                {
                    '$inc': {'statistic.postCount': 1},
                    '$set': {"is_ignore": topic_item['is_ignore']}
                }
            )
        else:
            self.db[self.collection_name].insert(dict(topic_item))

        self.close_spider()

        return topic_item['_id']

    def find_one_item(self, item):
        cursor = self.db[self.collection_name].find_one({'_id': item['_id']})
        if cursor:
            return cursor
            # from cwresponsivesites.items import TopicItem
            # return TopicItem.get_default_from_cursor(cursor)
