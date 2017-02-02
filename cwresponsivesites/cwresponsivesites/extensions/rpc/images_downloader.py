import logging
import os
import urllib2

from cwresponsivesites.extensions.rpc.gif_downloader import GifDownload
from cwresponsivesites.items import LogsItem, LogsItemTypes
from cwresponsivesites.utils.crawl_utils import CrawlUtils


class ImagesDownload(object):
    def __init__(self, logs_db=None):
        self.logs_db = logs_db
        self.gif_downloader = None
        super(ImagesDownload, self).__init__()

    @classmethod
    def get_image_location(cls, item):
        from cwresponsivesites.utils.crawl_utils import CrawlUtils
        return CrawlUtils.get_tmp_file(ImagesDownload.get_image_uuid(item))

    @classmethod
    def get_image_uuid(cls, item):
        image_link = item['image_src']
        return CrawlUtils.get_guid(image_link)

    @classmethod
    def get_image_extension(cls, local_image_path):
        import imghdr
        what_type = imghdr.what(local_image_path)
        if what_type:
            return what_type

        return 'jpeg'

    @classmethod
    def get_image_type(cls, local_image_path):
        return 'image/{}'.format(ImagesDownload.get_image_extension(local_image_path))

    def write_image_cache(self, item):
        image_link = item['image_src']
        if image_link:
            logging.debug("  Downloaded image url, {}".format(image_link))
            path = ImagesDownload.get_image_location(item)
            if not os.path.exists(path):
                self.__download_photo(item, image_link, path)

            if os.path.exists(path):
                self.gif_downloader = GifDownload(path, ImagesDownload.get_new_file_path(path))
                new_path = self.gif_downloader.check_and_get_first_frame()

                if new_path:
                    path = new_path

            if os.path.exists(path):
                return self.__adjust_extensition(path=path)

    def __adjust_extensition(self, path):
        """
        add extension to the path.
        for example: path: XXXXXX
                     extension: jpg
        new file name: XXXXXX.jpg
        :param path:
        :return:
        """
        file_extension = ImagesDownload.get_image_extension(path)
        new_file = "{}.{}".format(path, file_extension)
        new_file = new_file.replace('png.png', 'jpg')

        from wand.image import Image

        with Image(filename=path) as img:
            img.format = 'jpeg'
            img.save(filename=new_file)

        if os.path.exists(new_file):
            return new_file

    def __download_photo(self, item, image_link, image_location):
        req = urllib2.Request(image_link, None, {'User-Agent': 'Mozilla/5.0'})

        data = None
        try:
            data = urllib2.urlopen(req).read()
        except Exception, e:
            logging.debug("  Downloading photo failure, {}, item: {}".format(e, item))
            self.logs_db.save_log(
                LogsItem.get_default(message=e, detail=item, url=image_link,
                                     log_type=LogsItemTypes.image_downloader))

        if data:
            f = open(image_location, 'wb')
            f.write(data)
            f.close()

    def remove_tmp_image(self, item):
        relevant_path = CrawlUtils.get_tmp_folder()
        list = os.listdir(relevant_path)
        uuid = ImagesDownload.get_image_uuid(item)
        for file in list:
            if uuid in file:
                path = '{}.{}'.format(relevant_path, file)
                if os.path.exists(path):
                    os.remove(path)

    @classmethod
    def get_new_file_path(cls, path):
        return '{}.png'.format(path)
