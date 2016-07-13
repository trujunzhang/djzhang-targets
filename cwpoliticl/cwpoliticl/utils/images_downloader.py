import datetime
import os
import urllib

from hashlib import md5

import logging

# Cache_Folder = 'politicl'
Cache_Folder = 'djzhang'


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
        urllib.urlretrieve(image_link, image_location)
        return image_location

    @classmethod
    def remove_image_location(cls, image_location):
        ## delete only if file exists ##
        if os.path.exists(image_location):
            os.remove(image_location)
        else:
            logging.debug("Sorry, I can not remove %s file.".format(image_location))
