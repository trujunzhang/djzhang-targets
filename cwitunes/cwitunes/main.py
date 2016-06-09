from scrapy import cmdline
import os


class Utils:
    ## get input ##
    filename = "results.json"

    def prepare(self):
        ## delete only if file exists ##
        if os.path.exists(self.filename):
            os.remove(self.filename)
        else:
            print("Sorry, I can not remove %s file." % self.filename)

    def execute(self, module):
        # command = ("scrapy crawl %s  --output results.json" % module)
        command = ("scrapy crawl %s " % module)
        # command = ("scrapy crawl selenium  -a category=dublin -o items.json -t json")
        cmdline.execute(command.split())


# scrapy crawl apple -o items.json
def main():
    utils = Utils()
    utils.prepare()
    utils.execute("itunes")


if __name__ == '__main__':
    main()
