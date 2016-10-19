# -*- coding: utf-8 -*-

import unittest

from cwotto.extensions import ParsePy


class ParseRestTest(unittest.TestCase):
    def setUp(self):
        Parse_Application_name = "otto-products"
        ParsePy.APPLICATION_ID = "bAWPW8Ap8Sbk6prAu8hflEoDZ5uCvjTvY5nLpB7X"
        ParsePy.MASTER_KEY = "BxBCs6KP0rk6Q2sR4XW5CnsEWK4mj4vdIHsEw7nB"

    def xxtest_save_to_parse(self):
        gameScore = ParsePy.ParseObject("GameScore")
        gameScore.score = 1337
        gameScore.playerName = "Sean Plott"
        gameScore.cheatMode = False

        gameScore.save()

        id = gameScore.objectId()

        self.assertNotEqual(id, None)

    def test_query(self):
        gameScore = ParsePy.ParseQuery("GameScore").get("LWzpWzHOfr")

        x = 0
