import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
from scrapy import log

from datetime import datetime, time
from hashlib import md5
from datetime import datetime

from cwrealtor.items import RealtorItem


class Realtor(object):
    def __init__(self, mongo_uri, mongo_db, collection_name):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.collection_name = collection_name

    def open_spider(self):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self):
        self.client.close()

    def process_item(self, item):
        _url = item['href']
        guid = self._get_guid(_url)

        item["guid"] = guid
        item["updated_at"] = datetime.utcnow().replace(microsecond=0).isoformat(' ')

        valid = True
        for data in item:
            if not data:
                valid = False
                raise DropItem("Missing {0}!".format(data))

        if valid:
            self.db[self.collection_name].update_one({'guid': self._get_guid(_url)}, {'$set': dict(item)}, True)
            # self.db[self.collection_name].insert(dict(item))
            log.msg("Question added to MongoDB database!", level=log.DEBUG)

    def readyParse(self):
        self.collection = self.db[self.collection_name].find({"from": "upwork"})
        self.count = self.collection.count()

    def next(self, _last=""):
        if _last:
            self.db[self.collection_name].delete_one({'href': _last})

        _count = self.db[self.collection_name].count()
        if _count == 0:
            return ""

        _url = self.db[self.collection_name].find_one()['href']
        return _url

    def _get_guid(self, _url):
        """Generates an unique identifier for a given item."""
        # hash based solely in the url field
        return md5(_url).hexdigest()

    def parse(self, _driver, _url):
        _image_elements = _driver.find_elements_by_xpath('//*[@class="scrollableArea"]/a/img')
        _images = []
        for _element in _image_elements:
            _images.append(_element.get_attribute('src'))
        _address = _driver.find_element_by_xpath('//*[@id="addressBar"]/div/h1').text
        _price = _driver.find_element_by_xpath('//*[@class="m_property_dtl_info_hdr_lft"]/div').text
        _listing_id = _driver.find_element_by_xpath('//*[@class="m_property_dtl_info_hdr_lft_listingid"]').text

        _property_type = _driver.find_element_by_xpath('//*[@id="propertytype_value"]').text

        _land_size = ""

        try:
            _land_size = _driver.find_element_by_xpath('//*[@id="landsize_value"]').text
        except Exception, err:
            print 'find element by xpath ("@id="builtin_value") failed'

        _built_in = ""

        try:
            _built_in = _driver.find_element_by_xpath('//*[@id="builtin_value"]').text
        except Exception, err:
            print 'find element by xpath ("@id="builtin_value") failed'

        try:
            _built_in = _driver.find_element_by_xpath('//*[@id="buildingtype_value"]').text
        except Exception, err:
            print 'find element by xpath ("@id="buildingtype_value") failed'

        _Info_name = _driver.find_element_by_xpath('//*[@id="lblIndividualName"]').text
        _Info_phone = _driver.find_element_by_xpath('//*[@id="lblPhone_0"]').text
        _Info_email = ""  # _driver.find_elements_by_xpath('//*[@id="propertytype_value"]').text
        _description = _driver.find_element_by_xpath('//*[@id="m_property_dtl_gendescription"]').text

        item = RealtorItem(
            href=_url,
            images=_images,
            address=_address,
            price=_price,
            listing_id=_listing_id,
            property_type=_property_type,
            land_size=_land_size,
            built_in=_built_in,

            Info_name=_Info_name,
            Info_phone=_Info_phone,
            Info_email=_Info_email,
            description=_description
        )

        return item
