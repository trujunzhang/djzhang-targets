from cwpoliticl.items import CacheItem


class HindustantimesPaginationScraper(object):
    # Template
    #
    # row_container: [index]
    # |              |              |
    # | single story | 3 items list |
    # |              |              |
    left_panel_selector_dict = {
        "top_picks": {
            "row_container": '//*[@class="global_leftpanel"]/*[@id="div_storyContent"]/*[@class="row_container"][2]',
            "single": '/div/div/div[1]/div[1]',
            'right_list': '/div/div/div[2]/ul/li',
            'image': {
                'attr': 'src'
            }
        },
        "columns": {
            "row_container": '//*[@class="global_leftpanel"]/*[@id="div_storyContent"]/*[@class="row_container"][3]',
            "single": '/section[1]/div[1]',
            'right_list': '/section[2]/ul/li',
            'image': {
                'attr': 'data-original'
            }
        },
        "editorials": {
            "row_container": '//*[@class="global_leftpanel"]/*[@id="div_storyContent"]/*[@class="row_container"][4]',
            "single": '/section[1]/div[1]',
            'right_list': '/section[2]/ul/li',
            'image': {
                'attr': 'data-original'
            }
        },
        "analysis": {
            "row_container": '//*[@class="global_leftpanel"]/*[@id="div_storyContent"]/*[@class="row_container"][5]',
            "single": '/section[1]/div[1]',
            'right_list': '/section[2]/ul/li',
            'image': {
                'attr': 'data-original'
            }
        },
    }

    right_panel_selector_dict = {
        "top_news": {
            'ajax': '/fragment/PortalConfig/Common/modules/ht-feed/section-feed/rpcontroller.jpt?category={}&device=website'.format(
                'righttopnewsssection')
        },
    }

    def __init__(self, parser, url_from):
        self.parser = parser
        self.url_from = url_from
        super(HindustantimesPaginationScraper, self).__init__()

    def parse_pagination(self, url, hxs, cache_db, history_db):
        # Parsing for the left panel.
        # self._left_panel_parse(url, hxs, cache_db, history_db)
        # Parsing for the right panel.
        self._right_panel_parse(url, hxs, cache_db, history_db)

    def _right_panel_parse(self, url, hxs, cache_db, history_db):
        # top news
        pass

    def _left_panel_parse(self, url, hxs, cache_db, history_db):
        # Top picks
        self._parse_row_container(url, hxs, cache_db, history_db, self.left_panel_selector_dict['top_picks'])

        # columns
        self._parse_row_container(url, hxs, cache_db, history_db, self.left_panel_selector_dict['columns'])

        # editorials
        self._parse_row_container(url, hxs, cache_db, history_db, self.left_panel_selector_dict['editorials'])

        # analysis
        self._parse_row_container(url, hxs, cache_db, history_db, self.left_panel_selector_dict['analysis'])

    def _parse_row_container(self, url, hxs, cache_db, history_db, dict):
        # Left single column
        self._parse_single_photo_block_for_pagination(url, hxs, cache_db, history_db, dict,
                                                      '{}{}'.format(dict['row_container'], dict['single']))
        # Right list column
        self._parse_block_for_pagination(url, hxs, cache_db, history_db, dict,
                                         '{}{}'.format(dict['row_container'], dict['right_list']))

    def _parse_single_photo_block_for_pagination(self, url, hxs, cache_db, history_db, dict, select_block):
        href_selector = '{}/a/@href'.format(select_block)
        thumbnail_selector = '{}/a/img/@{}'.format(select_block, dict['image']['attr'])

        href = self.parser.get_value_with_urljoin(hxs, href_selector, url)
        # If the link already exist on the history database, ignore it.
        if history_db.check_history_exist(href):
            return

        thumbnail_src = self.parser.get_value_response(hxs, thumbnail_selector)

        cache_db.save_cache(CacheItem.get_default(url=href, thumbnail_url=thumbnail_src, url_from=self.url_from))

    def _parse_block_for_pagination(self, url, hxs, cache_db, history_db, dict, select_block):
        links = hxs.xpath(select_block).extract()

        for idx, link in enumerate(links):
            list_select_block = '{}[{}]/div[1]'.format(select_block, (idx + 1))
            self._parse_single_photo_block_for_pagination(url, hxs, cache_db, history_db, dict, list_select_block)

    def _ajax_for_block(self, url, hxs, cache_db, history_db, dict):
        ajax_url = self.parser.get_url_joinI(url, dict['ajax'])
        response = self.parser.ajax(ajax_url)
        x = 0
