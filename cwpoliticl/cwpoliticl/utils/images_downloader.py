import datetime
import os
import urllib
import urllib2

from hashlib import md5
import logging

Cache_Folder = 'politicl'
USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 '
'(KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36'


class ImagesDownload(object):
    @classmethod
    def _get_image_tmp_folder(cls):
        import tempfile, os
        tmp = os.path.join(tempfile.gettempdir(), Cache_Folder)
        if not os.path.exists(tmp):
            os.makedirs(tmp)

        return tmp

    def download(url, file_name, referer=None, cookie=None):
        req = urllib2.Request(url)
        if referer:
            req.add_header("Referer", referer)
        if cookie:
            req.add_header("Cookie", cookie)
        req.add_header("User-Agent", USER_AGENT)
        u = urllib2.urlopen(req)
        f = open(file_name, 'wb')
        meta = u.info()
        file_size = int(meta.getheaders("Content-Length")[0])
        print u"Downloading: %s Bytes: %s" % (file_name, file_size)

        file_size_dl = 0
        block_sz = 8192
        while True:
            _buffer = u.read(block_sz)
            if not _buffer:
                break

            file_size_dl += len(_buffer)
            f.write(_buffer)
            status = r"%10d  [%3.2f%%]" % (file_size_dl, file_size_dl * 100. / file_size)
            status += chr(8) * (len(status) + 1)
            print status,

        f.close()

    @classmethod
    def _get_image_location_path(cls, image_link):
        filename = md5(image_link).hexdigest()
        image_location = '{}/{}'.format(ImagesDownload._get_image_tmp_folder(), filename)
        if os.path.exists(image_location):
            return image_location

    @classmethod
    def write_cache_from_cloudflare(cls, image_link):
        image_location = ImagesDownload._get_image_location_path(image_link)

    @classmethod
    def write_cache(cls, image_link):
        image_location = ImagesDownload._get_image_location_path(image_link)

        urllib.urlretrieve(image_link, image_location)
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
