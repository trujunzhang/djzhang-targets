class GifDownload(object):
    def __init__(self, image_location, new_path):
        self.image_location = image_location
        self.new_path = new_path
        super(GifDownload, self).__init__()

    def check_and_get_first_frame(self):
        import imghdr
        type = imghdr.what(self.image_location)
        if type == 'gif':
            try:
                from PIL import Image
                frame = Image.open(self.image_location)
                frame.save(self.new_path)
            except Exception, e:
                pass

            return self.new_path
