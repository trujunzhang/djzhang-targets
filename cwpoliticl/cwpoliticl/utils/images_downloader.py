import datetime
import os
import urllib

from hashlib import md5
import logging
import wget

Cache_Folder = 'politicl'


class ImagesDownload(object):
    @classmethod
    def _get_image_tmp_folder(cls):
        import tempfile, os
        tmp = os.path.join(tempfile.gettempdir(), Cache_Folder)
        if not os.path.exists(tmp):
            os.makedirs(tmp)

        return tmp

    @classmethod
    def write_cache(cls, image_link):
        filename = md5(image_link).hexdigest()
        image_location = '{}/{}'.format(ImagesDownload._get_image_tmp_folder(), filename)
        if os.path.exists(image_location):
            return image_location

        wget.download(image_link, image_location)
        # urllib.urlretrieve(image_link, image_location)
        # ImagesDownload._download_photo(image_link, image_location)
        return image_location

    @classmethod
    def _download_photo(cls, img_url, image_location):
        try:
            image_on_web = urllib.urlopen(img_url)
            if image_on_web.headers.maintype == 'image':
                buf = image_on_web.read()
                downloaded_image = file(image_location, "wb")
                downloaded_image.write(buf)
                downloaded_image.close()
                image_on_web.close()
            else:
                return False
        except:
            return False
        return True

    @classmethod
    def remove_image_location(cls, image_location):
        ## delete only if file exists ##
        if os.path.exists(image_location):
            os.remove(image_location)
        else:
            logging.debug("Sorry, I can not remove %s file.".format(image_location))
