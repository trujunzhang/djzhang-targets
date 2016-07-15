from scrapy import cmdline


class Crawler:
    def execute(self, module):
        # para = '--set LOG_FILE={}.log'.format(module)
        para = ''
        command = "scrapy crawl {} {}".format(module, para)
        cmdline.execute(command.split())


def main():
    utils = Crawler()

    def _debug_execute():
        # Extensions
        from cwpoliticl.scraped_websites import WebsiteTypes

        # url_from = WebsiteTypes.dnaindia
        # url_from = WebsiteTypes.indianexpress
        # url_from = WebsiteTypes.theviewspaper
        # url_from = WebsiteTypes.dailyo
        url_from = WebsiteTypes.deccanchronicle

        utils.execute("{}_debug".format(url_from.value))

    # ========
    # ========
    # utils.execute("politicl")
    # utils.execute("politicl_watch")

    _debug_execute()


if __name__ == '__main__':
    main()
