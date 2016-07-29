from scrapy import cmdline
import os


class Utils:
    def execute(self, module):
        command = ("scrapy crawl %s " % module)
        cmdline.execute(command.split())


def main():
    utils = Utils()

    utils.execute("flock")


if __name__ == '__main__':
    main()
