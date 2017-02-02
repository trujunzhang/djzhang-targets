import logging
import pymongo


class HistoryDatabase(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def save_history(self, item):
        self.db[self.collection_name].update_one({'url': item['url']}, {'$set': dict(item)}, True)

    def check_history_exist_by_post_id(self, href):
        from cwresponsivesites.utils.crawl_utils import CrawlUtils
        post_id = CrawlUtils.get_guid(href),
        check_exist_count = self.db[self.collection_name].count({"post_id": post_id})
        return check_exist_count

    def check_history_exist(self, href):
        """
        This method is so important!

        Checking wheather the row exist before insert to database.
        :param href:
        :return:
        """
        check_exist_count = self.db[self.collection_name].count({"url": href})
        return check_exist_count
