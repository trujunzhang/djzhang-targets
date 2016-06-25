# -*- coding: utf-8 -*-
import scrapy


class OpensooqDebugSpider(scrapy.Spider):
    name = "opensooq_debug"
    allowed_domains = ["https://sa.opensooq.com/"]
    start_urls = [
        # paginate
        # 'https://sa.opensooq.com/ar/find?term=&cat_id=&scid=&city=&allposts_cb=true&allposts=no&price_from=&price_to=&page=1',
        # ajax
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=42946557&model_type=post'
        # detail
        # 'https://sa.opensooq.com/ar/search/42054599/شقة-للإيجار-حي-النعيم-5-غرف',
        # 'https://sa.opensooq.com/ar/search/43012611/فيلا-شمال-التخصصي-غرب-ابوبكر-حي-الياسمين'
        # detail without phone number
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=42552861&model_type=post',
        # 'https://sa.opensooq.com/ar/post/get-phone-number?model_id=39509897&model_type=post'
        # 'https://sa.opensooq.com/ar/search/42552861/%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA-%D9%84%D9%84%D8%A7%D8%B3%D9%88%D8%A7%D9%82-%D9%88%D8%A7%D9%84%D9%85%D8%AD%D9%84%D8%A7%D8%AA'
        # Fix phone number
        # 'https://sa.opensooq.com/ar/search/43152549/إفطار-صائم-بمكه-المكرمه'
        'https://sa.opensooq.com/ar/search/17978455/دهن-عود-ملكي'
    ]

    def __init__(self, name=None, **kwargs):
        from cwharaj.database_factory import DatabaseFactory, CollectionTypes
        database_factory = DatabaseFactory(kwargs['host'], kwargs['port'],
                                           kwargs['user'], kwargs['passwd'],
                                           kwargs['db'], kwargs['collection_name'])

        self._cache_db = database_factory.get_database(CollectionTypes.cache)
        self._history_db = database_factory.get_database(CollectionTypes.history)
        self._item_db = database_factory.get_database(CollectionTypes.item)

        from cwharaj.parser.opensooq_parser import OpensooqParse
        self._opensooq_parser = OpensooqParse()

        from cwharaj.utils.phone_number_set import PhoneNumberSet
        self.phone_dict = PhoneNumberSet()

        super(OpensooqDebugSpider, self).__init__(name, **kwargs)

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        return super(OpensooqDebugSpider, cls).from_crawler(crawler,
                                                            args,
                                                            host=crawler.settings.get('SQL_HOST'),
                                                            port=crawler.settings.get('SQL_PORT'),
                                                            user=crawler.settings.get('SQL_USER'),
                                                            passwd=crawler.settings.get('SQL_PASSWD'),
                                                            db=crawler.settings.get('SQL_DB'),
                                                            collection_name=crawler.settings.get('SQL_COLLECTION_NAME')
                                                            )

    def parse(self, response):
        phone_number_item = self._opensooq_parser.parse(response.url, response, self._item_db, self.phone_dict)

        _ajax_url = phone_number_item.get_ajax_url()
        if _ajax_url:
            yield scrapy.Request(_ajax_url, callback=self.ajax_phone_number_for_opensooq, dont_filter=True)
        else:  # No phone number found, fetch the oldest from the cache database.
            item = phone_number_item.scrapy_item
            if item:
                _id = item["ID"]
                item["number"] = ""
                yield item

    def ajax_phone_number_for_opensooq(self, response):
        _phone_number_base64 = response.body

        item = self.phone_dict.get_item_from_ajax_url_and_remove_dict(response.url)
        if item:
            _id = item["ID"]
            item["number"] = _phone_number_base64
            yield item

            # self._history_db.process_item(response.url, id=_id)
