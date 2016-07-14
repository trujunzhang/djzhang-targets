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

from cwpoliticl.utils.images_downloader import ImagesDownload


class WDXmlRPCUtils(object):
    def __init__(self, wd_host, wd_user, wd_passwd):
        url = "{}/xmlrpc.php".format(wd_host)
        self.wp = Client(url, wd_user, wd_passwd)
        super(WDXmlRPCUtils, self).__init__()

    def post_to_wd(self, item):
        # step 1: Download the featured image to the template folder.
        image_location = ImagesDownload.write_cache(item['image_src'])

        # step 2: Post to the wordpress via xml_rpc.
        attachment_id = self._post_image_to_wordpress(image_location)
        addpost = self._post_newpost_to_wordpress(item, attachment_id)

        # step 3: Remove the featured image on the template folder.
        ImagesDownload.remove_image_location(image_location)

        return addpost

    def _post_newpost_to_wordpress(self, item, attachment_id):
        post = WordPressPost()
        post.title = item['title']
        post.content = item['content']
        post.post_type = "post"
        post.post_status = "publish"
        post.terms_names = {
            'post_tag': item['tags'],
            'category': [item['url_from']]
        }
        post.custom_fields = []
        post.custom_fields.append({
            'key': 'custom_source_url',
            'value': item['url']
        })
        # cat1 = self.wp.call(taxonomies.GetTerm('category', 'wanghao'))
        # post.terms.append(cat1)
        post.thumbnail = attachment_id

        addpost = self.wp.call(posts.NewPost(post))

        return addpost

    def _post_image_to_wordpress(self, image_location):
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
