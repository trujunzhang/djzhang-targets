import os
import json

from cwresponsivesites.utils.crawl_utils import CrawlUtils
import logging


class StyleParser(object):
    def __init__(self, css_path, url):
        super(StyleParser, self).__init__()
        self.css_path = css_path
        self.url = url

    def __get_json_out_path(self):
        return CrawlUtils.get_tmp_file('{}.json'.format(CrawlUtils.get_guid(self.url)))

    def get_style_object_from_url(self):
        json_out_path = self.__get_json_out_path()
        import commands
        cmd = 'cssstats {} {} '.format(
            self.css_path,
            json_out_path
        )

        #  run command.
        callback = commands.getstatusoutput(cmd)

        if self.__check_json_result(json_out_path):
            # convert json to object.
            return self.__parse_json_as_obj()

    def __parse_json_as_obj(self):
        json_out_path = self.__get_json_out_path()
        data = json.load(json_out_path)

        return data

    def __check_json_result(self, json_out_path):
        if os.path.exists(json_out_path):
            return True

        return False
