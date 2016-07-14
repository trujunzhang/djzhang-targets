from datetime import datetime, time
from hashlib import md5

from cwpoliticl import settings
from wordpress_xmlrpc import Client, WordPressPost, xmlrpc_client
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo
from BeautifulSoup import BeautifulSoup
from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods import posts, media, taxonomies
from wordpress_xmlrpc.compat import xmlrpc_client
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo
from wordpress_xmlrpc.methods import taxonomies

from cwpoliticl.extensions.rpc.wordpress_xml_rpc_utils import WDXmlRPCUtils
from cwpoliticl.utils.images_downloader import ImagesDownload
import os
import urllib2

USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 '' \
''(KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36'


class TheViewsPaperXmlRPCUtils(WDXmlRPCUtils):
    def __init__(self, wd_host, wd_user, wd_passwd):
        super(TheViewsPaperXmlRPCUtils, self).__init__(wd_host, wd_user, wd_passwd)

    # Override
    def _download_image_to_cache(self, item):
        image_link = item['image_src']
        access_denied_cookie = item['access_denied_cookie']

        # step 1: Download the featured image to the template folder.
        image_location = ImagesDownload.get_image_location(image_link)
        if not os.path.exists(image_location):
            TheViewsPaperXmlRPCUtils.download_image(image_link, image_location, cookie=access_denied_cookie)

        return image_location

    @classmethod
    def download_image(cls, image_link, path, referer=None, cookie=None):
        req = urllib2.Request(image_link)
        if referer:
            req.add_header("Referer", referer)
        if cookie:
            req.add_header("Cookie", cookie)
        req.add_header("User-Agent", USER_AGENT)
        u = urllib2.urlopen(req)
        f = open(path, 'wb')
        meta = u.info()
        file_size = int(meta.getheaders("Content-Length")[0])
        # print u"Downloading: %s Bytes: %s" % (path, file_size)

        time.sleep(1)

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
            # print status,

        f.close()
