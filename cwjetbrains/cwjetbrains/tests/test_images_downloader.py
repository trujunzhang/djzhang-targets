# -*- coding: utf-8 -*-
import os
import unittest

from cwjetbrains.extensions.rpc.images_downloader import ImagesDownload


class ImagesDownloaderTest(unittest.TestCase):
    def setUp(self):
        self.item = {
            'image_src': 'http://static.dnaindia.com/sites/default/files/styles/half/public/2016/07/06/479288-modi7.jpg?itok=ah-ABhSg',
            "downloader": ImagesDownload()
        }
        self.item = {  # need cookie
            'image_src': 'http://images.indianexpress.com/2016/06/pulses480.jpg?w=450',
            # "downloader": ImagesDownload()
        }
        self.item = {
            'image_src': 'http://media2.intoday.in/dailyo//story/header/201607/priyankag-sheila-ab_071416102045.jpg',
            "downloader": ImagesDownload()
        }
        self.item = {
            'image_src': 'http://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-k69lc81sp2h0alh7auf1pmcra7-20160715005036.Medi.jpeg',
            "downloader": ImagesDownload()
        }

    def test_download_image(self):
        """
        temp folder: '/var/folders/t1/tylq1lf13nv3rzfll_hh_5fh0000gn/T/jetbrains'
        :return:
        """
        image_location = self.item['downloader'].write_image_cache(self.item)
        self.assertEqual(os.path.exists(image_location), True)
        self.item['downloader'].remove_image_location(image_location)
        self.assertEqual(os.path.exists(image_location), False)
