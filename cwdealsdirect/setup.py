# Automatically created by: scrapyd-deploy

from setuptools import setup, find_packages

setup(
    install_requires=[
        'scrapy_webdriver',
    ],
    dependency_links=[
        'https://github.com/sosign/scrapy-webdriver/archive/master.zip#egg=scrapy_webdriver',
    ],
    name         = 'project',
    version      = '1.0',
    packages     = find_packages(),
    entry_points = {'scrapy': ['settings = cwdealsdirect.settings']},
)
