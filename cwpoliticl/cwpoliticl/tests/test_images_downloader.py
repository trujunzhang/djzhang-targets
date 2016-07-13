# -*- coding: utf-8 -*-

import inspect, os
import unittest
from datetime import datetime

from cwpoliticl.extensions.base_parser import BaseParser
from cwpoliticl.utils.images_downloader import ImagesDownload


class ImagesDownloaderTest(unittest.TestCase):
    def setUp(self):
        self.image_url = 'http://static.dnaindia.com/sites/default/files/styles/half/public/2016/07/06/479288-modi7.jpg?itok=ah-ABhSg'

    def test_post_page(self):
        image_location = ImagesDownload.write_cache(self.image_url)
        x = 0
