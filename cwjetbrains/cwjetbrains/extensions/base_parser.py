import logging

from cwjetbrains.items import CacheItem
from cwjetbrains.utils.page_content_util import PageContentUtil
import urlparse
from BeautifulSoup import BeautifulSoup


class BaseParser(object):
    def __init__(self):
        pass

    def _add_url_scheme(self, thumbnail_src):
        if not 'http:' in thumbnail_src:
            thumbnail_src = 'http:{}'.format(thumbnail_src)

        return thumbnail_src

    def get_value_with_urljoin(self, hxs, query, base, index=0):
        href = self.extract_by_query(hxs, query, index)
        return self.get_url_join(href, base)

    def get_url_join(self, href, base):
        return urlparse.urljoin(base, href.strip())

    def extract_by_query(self, hxs, query, index=0, default=""):
        list = []

        try:
            list = hxs.xpath(query)
        except Exception, e:
            logging.debug("  get value via xpath failure, {}".format(e))

        if len(list) > index:
            value = list[index].extract()
            return value
        return default

    def extract_all_by_query(self, hxs, query):
        list = hxs.xpath(query).extract()

        lines = []
        for idx, line in enumerate(list):
            lines.append(line.replace('\n', '').replace('\r', ''))

        return ''.join(lines)

    def get_paragraphs(self, hxs, div_query):
        """
        Want to get the content from '//*[@class="story-body"]/*[@id="storyBody"]',
        All p is in '//*[@class="story-body"]/*[@id="storyBody"]/p' + '//text()'.

        Param 'div_query' is like '//*[@class="story-body"]/*[@id="storyBody"]'.

        :param hxs:
        :param div_query
        :return:
        """
        p_query = '{}/p'.format(div_query)
        s_list = hxs.xpath(p_query)

        lines = []
        for idx, p_s in enumerate(s_list):
            line = self.extract_all_by_query(hxs, '{}[{}]//text()'.format(p_query, (idx + 1)))
            lines.append(line)

        return PageContentUtil().get_limit_page_content(lines)

    def get_content_from_ptag(self, hxs, query):
        """
        Get the all value.
        """

        page_content_util = PageContentUtil()

        source = self.extract_by_query(hxs, query)
        lines = page_content_util.get_paragraphs_lines(source)

        return page_content_util.get_limit_page_content(lines)

    def ajax(self, ajax_url):
        import requests
        r = requests.get(ajax_url)
        if r.status_code == 200:
            return r.text

    def ajax_json(self, ajax_url):
        string = self.ajax(ajax_url)
        if string:
            import json
            return json.loads(string)

    def get_image_from_srcset(self, hxs, selector):
        image = self.extract_by_query(hxs, selector)
        srcset = image.split(',')
        if len(srcset) > 0:
            src_format = srcset[len(srcset) - 1].strip()
            src_split = src_format.split(' ')
            if len(src_split) == 2:
                return src_split[0]

        return ""

    def get_image_src_from_style(self, style_content):
        import cssutils

        style = cssutils.parseStyle(style_content)
        url = style['background-image']
        url = url.replace("'", '').replace('"', '')
        url = url.replace('url(', '').replace(')', '')
        return url

    def get_aimg_block(self, source, base=None):
        aimg = {
            'href': '',
            'src': ''
        }

        c = BeautifulSoup(source)

        a_tag = c.find('a')
        if a_tag:
            aimg['href'] = a_tag['href']

        img_tag = c.find('img')
        if img_tag:
            aimg['src'] = img_tag['src']

        if base:
            aimg['href'] = urlparse.urljoin(base, aimg['href'])

        return aimg

    def get_img(self, source, attr='src'):
        c = BeautifulSoup(source)

        img_tag = c.find('img')
        if img_tag:
            return img_tag[attr]

        return ''

    def _get_exclude(self, img, exclude):
        is_exclude = False
        for x in exclude:
            if x in img:
                is_exclude = True

        return is_exclude

    def save_aimg_for_pagination(self, url, hxs, cache_db, history_db, select_block, url_from):
        div_block = self.extract_by_query(hxs, select_block)
        if div_block:
            self.save_cache(self.get_aimg_block(div_block, url), cache_db, history_db, url_from)

    def save_block_for_pagination(self, url, hxs, cache_db, history_db, select_block, url_from):
        """
        Scraping the list of the following template showing an image with a clicked link.

         <div class="DIV_BLOCK">
             <a href="URL">
                <img src="URL" alt="STRING" title="STRING">
             </a>
        </div>
        """
        links = hxs.xpath(select_block).extract()

        for idx, div_block in enumerate(links):
            self.save_cache(self.get_aimg_block(div_block, url), cache_db, history_db, url_from)

    def save_block_from_source(self, url, cache_db, history_db, source, dict, url_from):
        c = BeautifulSoup(source)
        tag = c.find(dict['name'], dict['attrs'])
        if tag:
            f_source = tag.renderContents()
            self.save_cache(self.get_aimg_block(f_source, url), cache_db, history_db, url_from)

    def save_cache(self, aimg, cache_db, history_db, url_from):
        href = aimg['href']
        img_src = aimg['src']

        if not history_db.check_history_exist(href):  # If the link already exist on the history database, ignore it.
            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=img_src, url_from=url_from))
