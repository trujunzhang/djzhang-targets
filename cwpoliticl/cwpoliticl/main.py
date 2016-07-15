from scrapy import cmdline

from cwpoliticl.scraped_websites import get_crawler_name


class Crawler:
    def execute(self, module):
        # para = '--set LOG_FILE={}.log'.format(module)
        para = ''
        command = "scrapy crawl {} {}".format(module, para)
        cmdline.execute(command.split())


def main():
    utils = Crawler()

    utils.execute(get_crawler_name())

if __name__ == '__main__':
    main()
