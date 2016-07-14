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


class TheViewsPaperXmlRPCUtils(WDXmlRPCUtils):
    def __init__(self, wd_host, wd_user, wd_passwd):
        url = "{}/xmlrpc.php".format(wd_host)
        self.wp = Client(url, wd_user, wd_passwd)
        super(TheViewsPaperXmlRPCUtils, self).__init__(wd_host, wd_user, wd_passwd)

    def post_to_wd_for_theviewspaper(self, item, access_denied_cookie):
        pass
