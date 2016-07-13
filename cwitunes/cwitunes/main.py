from scrapy import cmdline
import os


class Utils:
    def execute(self, module):
        # command = ("scrapy crawl %s  --output results.json" % module)
        command = ("scrapy crawl %s " % module)
        # command = ("scrapy crawl selenium  -a category=dublin -o items.json -t json")
        cmdline.execute(command.split())


# scrapy crawl apple -o items.json
def main():
    utils = Utils()

    utils.execute("itunes")


if __name__ == '__main__':
    main()
