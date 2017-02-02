from cwresponsivesites.utils.crawl_utils import CrawlUtils
import logging


class StyleChecker(object):
    def __init__(self):
        super(StyleChecker, self).__init__()
        self.dr_css_inline_index_js_path = "/Users/djzhang/Desktop/VPS/djzhang-targets/cwresponsivesites/cwresponsivesites/extensions/dr-css-inliner/index.js"
        self.device_sizes = [
            # {
            #     "device": "ipad",
            #     "size": {
            #         "width": 768,
            #         "height": 1024
            #     }
            # },
            {
                "device": "Nexus 5X",
                "size": {
                    "width": 412,
                    "height": 732
                }

            }
        ]

    def __get_css_out_path(self, url):
        return CrawlUtils.get_tmp_file('{}.css'.format(CrawlUtils.get_guid(url)))

    def get_style_from_url(self, url):
        css_out_path = self.__get_css_out_path(url)
        import commands
        size = self.device_sizes[0]['size']
        cmd = 'phantomjs {} {} -w {} -h {} -c -o {}'.format(
            self.dr_css_inline_index_js_path,
            url,
            size['width'],
            size['height'],
            css_out_path
        )

        #  run command.
        callback = commands.getstatusoutput(cmd)

        return self.__inline_css_result(callback=callback)

    def __inline_css_result(self, callback):
        if len(callback) == 2:
            if callback[0] == 0 and callback[1] == '':
                # it means that run successfully.
                return True

        return False

    def parse_style(self, url):
        css_out_path = self.__get_css_out_path(url)


    def check_style(self, url):
        # step 1: get inline style from the url.
        result = self.get_style_from_url(url=url)
        if not result:
            logging.debug("Get the inline style from {} failure.".format(url))

            # step 2: checking whether contains 'display=none'
