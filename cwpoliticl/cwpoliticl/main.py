from scrapy import cmdline
import os


class Crawler:
    def execute(self, module):
        para = '--set LOG_FILE={}.log'.format(module)
        # para = ''
        command = "scrapy crawl {} {}".format(module, para)
        cmdline.execute(command.split())

def main():
    utils = Crawler()

    # utils.execute("politicl")
    utils.execute("politicl_rpc")

    # utils.execute("politicl_debug")
    # utils.execute("politicl_browser")
    # utils.execute("politicl_browser_debug")

if __name__ == '__main__':
    main()