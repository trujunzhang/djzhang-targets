from cwupwork.items import UpworkItem


class upwork(object):
    def __init__(self, _url):
        super(upwork, self).__init__()
        self.item = UpworkItem()
        self.item["href"] = _url
        self.item["Hires"] = str(0)

    def parse(self, _type_span, _value_span):
        if len(_type_span) > 0:
            _type = _type_span[0]
            if "Last Viewed" in _type:
                self.item['Last_viewed'] = self.getValue(_value_span)
            if "Hires" in _type:
                self.item['Hires'] = self.getValue(_value_span)
            if "Hired" in _type:
                self.item['Hires'] = self.getValue(_value_span)
            if "Proposals" in _type:
                self.item['proposals'] = self.getValue(_value_span)
            if "Interviewing" in _type:
                self.item['Interviewing'] = self.getValue(_value_span)


    def getValue(self, _value_span):
        _value = ""
        if len(_value_span) >= 2:
            _value= _value_span[1].strip()

        return _value

    def getItem(self):
        return self.item
