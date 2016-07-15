from scrapy import cmdline


class Crawler:
    def execute(self, module):
        # para = '--set LOG_FILE={}.log'.format(module)
        para = ''
        command = "scrapy crawl {} {}".format(module, para)
        cmdline.execute(command.split())


def main():
    utils = Crawler()

    # utils.execute("politicl")
    # utils.execute("politicl_watch")

    # Extensions
    utils.execute("dnaindia_debug")
    # utils.execute("indianexpress_debug")
    # utils.execute("theviewspaper_debug")
    # utils.execute("dailyo_debug")


if __name__ == '__main__':
    main()
