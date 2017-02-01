from scrapy import cmdline


class Crawler:
    def execute(self, module):
        # para = '--set LOG_FILE={}.log'.format(module)
        para = ''
        command = "scrapy crawl {} {}".format(module, para)
        cmdline.execute(command.split())


def main():
    utils = Crawler()

    utils.execute('kaismh')


if __name__ == '__main__':
    main()
