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
    from cwpoliticl.scraped_websites import WebsiteTypes

    url_from = WebsiteTypes.dnaindia
    # url_from = WebsiteTypes.indianexpress
    # url_from = WebsiteTypes.theviewspaper
    # url_from = WebsiteTypes.dailyo

    utils.execute("{}_debug".format(url_from.value))


if __name__ == '__main__':
    main()
