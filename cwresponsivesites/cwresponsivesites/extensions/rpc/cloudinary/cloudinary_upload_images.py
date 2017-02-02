# coding=utf-8
import logging
import urllib2


class CloudinaryUploadImages(object):
    @classmethod
    def upload_image(cls, logs_db, meteor_client, item):
        from cwresponsivesites.extensions.meteor.meteor_files import Uploader
        uploader = Uploader(meteor_client, 'Images', transport='ddp', verbose=True)

        import time
        # t0 = time.time()

        from cwresponsivesites.extensions.rpc.images_downloader import ImagesDownload
        image_download = ImagesDownload(logs_db=logs_db)
        # step01: download it
        local_image_path = image_download.write_image_cache(item)

        # step2: get the downloaded image's type
        # file_type = ImagesDownload.get_image_type(local_image_path)
        file_uuid = None  # image_download.get_image_uuid(item)

        if local_image_path:
            # upload the downloaded images to the meteor web server.
            upload_id = uploader.upload(local_image_path, fileId=file_uuid)

            while not uploader.finished:
                time.sleep(0.1)

                # t1 = time.time()
                # print('time elapsed:%.1fs' % (t1 - t0))

            image_download.remove_tmp_image(item)

            return upload_id

        return ''
