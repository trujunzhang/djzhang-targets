# -*- coding: utf-8 -*-

import unittest

from cwpoliticl.extensions.rpc.images_downloader import ImagesDownload


class ImagesDownloaderTest(unittest.TestCase):
    def setUp(self):
        self.item = {
            # 'image_src': 'http://static.dnaindia.com/sites/default/files/styles/half/public/2016/07/06/479288-modi7.jpg?itok=ah-ABhSg'
            'image_src': 'http://images.indianexpress.com/2016/06/pulses480.jpg?w=450'
        }
        self.image_downloader = ImagesDownload()

    def test_download_image(self):
        image_location = self.image_downloader.write_image_cache(self.item)
        # self.image_downloader.remove_image_location(image_location)
