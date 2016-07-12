import requests
import os
import re
import urllib
import urllib2

from BeautifulSoup import BeautifulSoup
from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods import posts, media, taxonomies
from wordpress_xmlrpc.compat import xmlrpc_client
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost
from wordpress_xmlrpc.methods.users import GetUserInfo
from wordpress_xmlrpc.methods import taxonomies


def getPage(url, filename, header_required=False):
    if filename == '':
        print "No File Name"
        exit()
    c = ''
    if os.path.isfile('pages/' + filename):
        print("Loading the data via the file.")
        f = open('pages/' + filename, 'r')
        c = f.read()
    else:
        print("Fetching the data via the URL.")
        headers = {'User-agent': 'Mozilla/5.0'}
        if header_required:
            result = requests.get(url, headers=headers)
        else:
            result = requests.get(url)
        c = result.content
        f = open('pages/' + filename, 'w')
        f.write(c)
    f.close()
    c = BeautifulSoup(c)
    return c


def sourcename(url, cat1=None, cat2=None, cat3=None, d=True):
    html = getPage(url, "page1.html")
    os.remove('pages/page1.html')
    title = html.select('h1')[0].text
    first_para = html.select('.story-content > p:nth-of-type(1)')[0].text
    second_para = html.select('.story-content > p:nth-of-type(2)')[0].text
    try:
        image = html.select('.image > img')[0].get('src')
    except Exception:
        image = None
    wp = Client('http://www.domain.com/xml-rpc.php', 'username', 'password')
    if image:
        filename = 'http://www.livemint.com' + image
        path = os.getcwd() + "\\00000001.jpg"
        f = open(path, 'wb')
        f.write(urllib.urlopen(filename).read())
        f.close()
        # prepare metadata
        data = {
            'name': 'picture.jpeg',
            'type': 'image/jpeg',  # mimetype
        }

        with open(path, 'rb') as img:
            data['bits'] = xmlrpc_client.Binary(img.read())
        response = wp.call(media.UploadFile(data))
    post = WordPressPost()
    post.title = title
    post.user = 14
    post.post_type = "post"
    post.content = first_para + '\n' + '\n' + second_para
    if d:
        post.post_status = "draft"
    else:
        post.post_status = "publish"
    if image:
        attachment_id = response['id']
        post.thumbnail = attachment_id
    post.custom_fields = []
    post.custom_fields.append({
        'key': 'custom_source_url',
        'value': url
    })
    if cat1:
        cat1 = wp.call(taxonomies.GetTerm('category', cat1))
        post.terms.append(cat1)
    if cat2:
        cat2 = wp.call(taxonomies.GetTerm('category', cat2))
        post.terms.append(cat2)
    if cat3:
        cat3 = wp.call(taxonomies.GetTerm('category', cat3))
        post.terms.append(cat3)
    addpost = wp.call(posts.NewPost(post))
    # end
