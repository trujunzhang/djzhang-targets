# -*- coding: utf-8 -*-
import scrapy


class FreelancerSpider(scrapy.Spider):
    name = "freelancer"
    allowed_domains = ["freelancer.com"]
    start_urls = (
        'http://www.freelancer.com/',
    )

    def parse(self, response):
        pass
