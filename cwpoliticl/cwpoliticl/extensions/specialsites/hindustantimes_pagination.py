from cwpoliticl.items import CacheItem


class HindustantimesPaginationScraper(object):
    # Template
    #
    # row_container: [index]
    # |              |              |
    # | single story | 3 items list |
    # |              |              |
    hindustantimes_selector_dict = {
        "top_picks": {
            "row_container": '//*[@id="div_storyContent"]/*[@class="row_container"][2]',
            "single": '/div/div/div[1]/div[1]',
            'right_list': '/div/div/div[2]/ul/li',
            'image_attr': 'src'
        },
        "columns": {
            "row_container": '//*[@id="div_storyContent"]/*[@class="row_container"][3]',
            "single": '/section[1]/div[1]',
            'right_list': '/section[2]/ul/li',
            'image_attr': 'data-original'
        }
    }

    def __init__(self, parser, url_from):
        self.parser = parser
        self.url_from = url_from
        super(HindustantimesPaginationScraper, self).__init__()

    def parse_pagination(self, url, hxs, cache_db, history_db):

        # Top picks
        # self._parse_row_container(url, hxs, cache_db, history_db, self.hindustantimes_selector_dict['top_picks'])

        # columns
        self._parse_row_container(url, hxs, cache_db, history_db, self.hindustantimes_selector_dict['columns'])

        # # columns
        # row_container = '//*[@class="row_container"]/*[@class="col_2 india_headlines"]'
        # lists = hxs.xpath(row_container)
        # for idx, link in enumerate(lists):
        #     single_photo_section = '//*[@class="row_container"]/*[@class="col_2 col_2_right_margin india_topNews"]'.format(
        #         row_container, (idx + 1))
        #     # lists_section = '//*[@class="row_container"]/*[@class="col_2 india_headlines"]'.format(
        #     #     row_container, (idx + 1))
        #
        #     self._parse_single_photo_block_for_pagination(url, hxs, cache_db, history_db, single_photo_section)

        # self._parse_block_for_pagination(url, hxs, cache_db, history_db, '//*[@class="hm_topstory_3_story"]/ul/li')

    def _parse_row_container(self, url, hxs, cache_db, history_db, dict):
        self._parse_single_photo_block_for_pagination(url, hxs, cache_db, history_db, dict,
                                                      '{}{}'.format(dict['row_container'], dict['single']))

        self._parse_block_for_pagination(url, hxs, cache_db, history_db, dict,
                                         '{}{}'.format(dict['row_container'], dict['right_list']))

    def _parse_single_photo_block_for_pagination(self, url, hxs, cache_db, history_db, dict, select_block):
        href_selector = '{}/a/@href'.format(select_block)
        thumbnail_selector = '{}/a/img/@{}'.format(select_block, dict['image_attr'])

        href = self.parser.get_value_with_urljoin(hxs, href_selector, url)
        # If the link already exist on the history database, ignore it.
        if history_db.check_history_exist(href):
            return

        thumbnail_src = self.parser.get_value_response(hxs, thumbnail_selector)

        cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, dict, select_block):
        links = hxs.xpath(select_block).extract()

        for idx, link in enumerate(links):
            href_selector = '{}[{}]/div[1]/a/@href'.format(select_block, (idx + 1))
            thumbnail_selector = '{}[{}]/div[1]/a/img/@{}'.format(select_block, (idx + 1), dict['image_attr'])

            href = self.parser.get_value_response(hxs, href_selector)
            # If the link already exist on the history database, ignore it.
            if history_db.check_history_exist(href):
                continue

            thumbnail_src = self.parser.get_value_response(hxs, thumbnail_selector)

            cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))
