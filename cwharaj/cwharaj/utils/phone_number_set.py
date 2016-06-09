import urlparse


class PhoneNumberSet(object):
    def __init__(self):
        self.dict = {}
        super(PhoneNumberSet, self).__init__()

    def add_row(self, model_id, row):
        self.dict[model_id] = row

    def get_page_url_from_ajax_url(self, _ajax_url, _phone_number_base64):
        model_id = urlparse.parse_qs(urlparse.urlparse(_ajax_url).query)['model_id'][0]
        if model_id:
            row = self.dict[model_id]
            if row:
                row["phone_number_base64"] = _phone_number_base64
                return row["url"]

        return None

    def get_phone_number_base64(self, model_id):
        row = self.dict[model_id]
        if row:
            return row["phone_number_base64"]

        return None

    def check_exist(self, model_id):
        if model_id in self.dict:
            return True

        return False

    def remove_row(self, model_id):
        if self.check_exist(model_id):
            del self.dict[model_id]
