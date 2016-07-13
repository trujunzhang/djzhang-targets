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


class WDXmlRPCUtils(object):
    def __init__(self):
        url = "{}/xmlrpc.php".format(settings.WD_HOST)
        self.wp = Client(url, settings.WD_USER, settings.WD_PASSWD)
        super(WDXmlRPCUtils, self).__init__()

    def post_to_wordpress(self):
        pass

    def _post_newpost_to_wordpress(self, attachment_id):
        # Step 02
        post = WordPressPost()
        post.title = 'Post by the xml_rpc with a thumbnail'
        post.content = 'How to post to wordpress using xml_rpc with a thumbnail.'
        post.post_type = "post"
        post.post_status = "publish"
        post.terms_names = {
            'post_tag': ['scrapy', 'xml_rpc'],
            'category': ['Tutorial', 'Tests']
        }
        post.custom_fields = []
        post.custom_fields.append({
            'key': 'custom_source_url',
            'value': 'http://www.scruby.site'
        })
        # cat1 = self.wp.call(taxonomies.GetTerm('category', 'wanghao'))
        # post.terms.append(cat1)
        post.thumbnail = attachment_id

        addpost = self.wp.call(posts.NewPost(post))

    def _post_image_to_wordpress(self, image_location):
        # Step 01
        # prepare metadata
        data = {
            'name': 'picture.jpeg',
            'type': 'image/jpeg',  # mimetype
        }

        path = image_location
        with open(path, 'rb') as img:
            data['bits'] = xmlrpc_client.Binary(img.read())
        response = self.wp.call(media.UploadFile(data))
        attachment_id = response['id']

        return attachment_id
