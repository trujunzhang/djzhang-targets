import datetime
import os
import urllib

from hashlib import md5


class ImagesDownload(object):
    @classmethod
    def _get_image_tmp_folder(self):
        import tempfile, os
        tmp = os.path.join(tempfile.gettempdir(), 'politicl')
        os.makedirs(tmp)

        return tmp

    @classmethod
    def write_cache(self, image_link):
        filename = md5(image_link).hexdigest()
        image_location = '{}/{}'.format(ImagesDownload._get_image_tmp_folder(), filename)
        urllib.urlretrieve(image_link, image_location)
        return image_location
