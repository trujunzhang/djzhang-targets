from scrapy import cmdline
import os


class Crawler:
    def execute(self, module):
        command = ("scrapy crawl %s" % module)
        cmdline.execute(command.split())


def main():
    utils = Crawler()

    utils.execute("haraj")
    # utils.execute('harajwatch')

    # utils.execute("opensooq_debug")
    # utils.execute("opensooq_debug")
    # utils.execute('harajwatch_debug')


if __name__ == '__main__':
    main()
