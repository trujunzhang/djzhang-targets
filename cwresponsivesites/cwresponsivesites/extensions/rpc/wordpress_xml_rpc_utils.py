# coding=utf-8
import logging

from MeteorClient import MeteorClient

from cwresponsivesites.database.mongo.posts_mg import PostsDatabase
from cwresponsivesites.items import LogsItem, LogsItemTypes


class WDXmlRPCUtils(object):
    def __init__(self, mg_host, mg_collection,
                 cloudinary_rest,
                 topics_filter_keys,
                 logs_db=None):

        from cwresponsivesites.scraped_websites import Politicl
        logging.debug("  The mongo: ")
        logging.debug("       {}".format(mg_host))
        logging.debug("  ")
        Politicl.print_info()

        self.post_mg_db = PostsDatabase(mg_host, mg_collection, 'posts')
        self.logs_db = logs_db

        meteor_url = 'ws://{}:{}/websocket'.format(cloudinary_rest['CLOUDINARY_IMAGE_HOST'],
                                                   cloudinary_rest['CLOUDINARY_IMAGE_PORT'])
        logging.debug("  The meteor_rest: ")
        logging.debug("       {}".format(meteor_url))

        # 'ws://127.0.0.1:3000/websocket'
        self.meteor_client = MeteorClient(meteor_url)
        self.meteor_client.connect()

        super(WDXmlRPCUtils, self).__init__()

    def check_articles(self, item):
        url = item['url']
        tags = item['topicsName']
        have_tags = item['have_tags']
        image_src = item['image_src']
        content = item['content']
        title = item['title']
        if not content:
            self.logs_db.save_log(
                LogsItem.get_default(message='Not found content', detail=item, url=url,
                                     log_type=LogsItemTypes.content))
            return None
            # if have_tags and (len(tags) == 0):
            # self.logs_db.save_log(
            #     LogsItem.get_default(message='Not found tags', detail=item, url=url,
            #                          log_type=LogsItemTypes.tags))
            # if not image_src:
            # self.logs_db.save_log(
            #     LogsItem.get_default(message='Not found image', detail=item, url=url,
            #                          log_type=LogsItemTypes.image))
        if not title:
            self.logs_db.save_log(
                LogsItem.get_default(message='Not found title', detail=item, url=url,
                                     log_type=LogsItemTypes.title))

        return item

    def post_to_wd(self, item):
        if self.check_articles(item) is None:
            return -1

        item['cloudinaryId'] = self.get_cloudinary_id(item=item)

        # step 4: save post and tags and image meta to mongo database.
        self.post_mg_db.save_post(item=item)

    def get_cloudinary_id(self, item):
        image_link = item['image_src']
        if image_link:
            from cwresponsivesites.extensions.rpc.cloudinary.cloudinary_upload_images import CloudinaryUploadImages
            cloudinary_id = CloudinaryUploadImages.upload_image(self.logs_db, self.meteor_client, item)
            if cloudinary_id:
                return cloudinary_id

        return ''
