import logging
import os
import urllib
from hashlib import md5

Cache_Folder = 'politicl'


class ImagesDownload(object):
    def __init__(self):
        super(ImagesDownload, self).__init__()

    @classmethod
    def _get_image_tmp_folder(cls):
        import tempfile, os
        tmp = os.path.join(tempfile.gettempdir(), Cache_Folder)
        if not os.path.exists(tmp):
            os.makedirs(tmp)

        return tmp

    @classmethod
    def get_image_location(cls, image_link):
        filename = md5(image_link).hexdigest()
        return '{}/{}'.format(ImagesDownload._get_image_tmp_folder(), filename)

    def write_cache(self, item):
        image_link = item['image_src']
        if image_link:
            image_location = ImagesDownload.get_image_location(image_link)
            if not os.path.exists(image_location):
                self._download_photo(item, image_link, image_location)

                # wget.download(image_link, image_location)
                # ImagesDownload._download_photo(image_link, image_location)
                return image_location

    def _download_photo(self, item, image_link, image_location):
        urllib.urlretrieve(image_link, image_location)

    # def _download_photo(cls, img_url, image_location):
    #     try:
    #         image_on_web = urllib.urlopen(img_url)
    #         if image_on_web.headers.maintype == 'image':
    #             buf = image_on_web.read()
    #             downloaded_image = file(image_location, "wb")
    #             downloaded_image.write(buf)
    #             downloaded_image.close()
    #             image_on_web.close()
    #         else:
    #             return False
    #     except:
    #         return False
    #     return True

    def remove_image_location(self, image_location):
        ## delete only if file exists ##
        if os.path.exists(image_location):
            os.remove(image_location)
        else:
            logging.debug("Sorry, I can not remove %s file.".format(image_location))
