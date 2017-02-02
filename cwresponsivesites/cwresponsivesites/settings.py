# -*- coding: utf-8 -*-

import json
import os
from os.path import expanduser

# Scrapy settings for cwresponsivesites project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     http://doc.scrapy.org/en/latest/topics/settings.html
#     http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
#     http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'cwresponsivesites'

SPIDER_MODULES = ['cwresponsivesites.spiders']
NEWSPIDER_MODULE = 'cwresponsivesites.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# USER_AGENT = 'cwresponsivesites (+http://www.yourdomain.com)'

# Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 4

# Configure a delay for requests for the same website (default: 0)
# See http://scrapy.readthedocs.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 2

# Disable cookies (enabled by default)
COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
# TELNETCONSOLE_ENABLED=False

# Override the default request headers:
# DEFAULT_REQUEST_HEADERS = {
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#   'Accept-Language': 'en',
# }

# Enable or disable spider middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html
# SPIDER_MIDDLEWARES = {
#    'cwresponsivesites.middlewares.MyCustomSpiderMiddleware': 543,
# }

# Enable and configure the AutoThrottle extension (disabled by default)
# See http://doc.scrapy.org/en/latest/topics/autothrottle.html
# NOTE: AutoThrottle will honour the standard settings for concurrency and delay
AUTOTHROTTLE_ENABLED = True
# The initial download delay
AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
AUTOTHROTTLE_MAX_DELAY = 60
# Enable showing throttling stats for every response received:
AUTOTHROTTLE_DEBUG = True

# Enable and configure HTTP caching (disabled by default)
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
# HTTPCACHE_ENABLED=True
# HTTPCACHE_EXPIRATION_SECS=0
# HTTPCACHE_DIR='httpcache'
# HTTPCACHE_IGNORE_HTTP_CODES=[]
# HTTPCACHE_STORAGE='scrapy.extensions.httpcache.FilesystemCacheStorage'

DOWNLOADER_MIDDLEWARES = {
    'cwresponsivesites.middlewares.RandomUserAgentMiddleware': 200,
    'cwresponsivesites.middlewares.CustomDownloaderMiddleware': 543,
}

# table_name
SQL_COLLECTION_NAME = 'politicl'

with open('{}/{}'.format(expanduser("~"), '.newspoliticl')) as data_file:
    data = json.load(data_file)

MG_HOST = data['MG_HOST']  # 'localhost:3001'  # data['PWD_HOST']
MG_COLLECTION = data['MG_COLLECTION']  # 'meteor'  # data['PWD_URL']
MAX_COUNT_PER_TIME = data['MAX_COUNT_PER_TIME']

TOPICS_FILTER_KEYS = data['TOPICS_FILTER_KEYS']

if not 'CLOUDINARY_IMAGE_HOST' in data['CLOUDINARY'].keys():
    cloudinary_image_name = data['CLOUDINARY']['CLOUDINARY_IMAGE_NAME']
    file = open('/etc/hosts', "r")
    for line in file:
        if cloudinary_image_name in line:
            s = line.split()[0:]
            data['CLOUDINARY']["CLOUDINARY_IMAGE_HOST"] = s[0]

CLOUDINARY_REST = data['CLOUDINARY']

# mongo_url = 'http://localhost:3001'
