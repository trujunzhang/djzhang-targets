# coding=utf-8
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


# page_source = driver.page_source
# driver.save_screenshot('github.png')
class GithubSearchTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.PhantomJS(executable_path='/usr/local/bin/phantomjs')
        self.driver.set_window_size(1280, 1024)
        self.base_url = "https://github.com"

    def xxxtest_python_org_search(self):
        driver = self.driver
        driver.get("http://www.python.org")
        assert "Python" in driver.title
        elem = driver.find_element_by_name("q")
        elem.clear()
        elem.send_keys("pycon")
        elem.send_keys(Keys.RETURN)
        # driver.save_screenshot('python-search-result.png')
        assert "No results found." not in driver.page_source

    def tearDown(self):
        self.driver.close()
