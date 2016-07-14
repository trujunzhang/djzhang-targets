from scrapy import cmdline


class Crawler:
    def execute(self, module):
        para = '--set LOG_FILE={}.log'.format(module)
        # para = ''
        command = "scrapy crawl {} {}".format(module, para)
        cmdline.execute(command.split())


def main():
    utils = Crawler()

    # utils.execute("haraj")
    # utils.execute('harajwatch')

    # ===============
    # test
    # ===============
    # utils.execute('opensooqwatch_debug')
    utils.execute("opensooq_debug")
    # utils.execute("opensooq_commentdate_debug")
    # utils.execute("mstaml_debug")
    # utils.execute("harajsa_debug")


if __name__ == '__main__':
    main()
