# coding=utf-8
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class GithubSearchTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.PhantomJS()
        self.base_url = "https://github.com"

    def test_github_repo_search_without_criteria(self):
        driver = self.driver
        driver.get(self.base_url)
        search_box = driver.find_element_by_name("q")
        search_box.send_keys(Keys.RETURN)
        assert "Search more than" in driver.page_source

    def test_github_repo_search_for_selenium(self):
        driver = self.driver
        driver.get(self.base_url)
        search_box = driver.find_element_by_name("q")
        search_box.send_keys("selenium")
        search_box.send_keys(Keys.RETURN)
        assert "We’ve found" in driver.page_source

    def test_github_repo_search_with_invalid_string(self):
        driver = self.driver
        driver.get(self.base_url)
        search_box = driver.find_element_by_name("q")
        search_box.send_keys("?*#^^%")
        search_box.send_keys(Keys.RETURN)
        assert "Your query contains a character that is ignored" in driver.page_source

    def tearDown(self):
        self.driver.close()
