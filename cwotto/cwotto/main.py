from scrapy import cmdline
import os


class Crawler:
    ## get input ##
    filename = "products.csv"

    def prepare(self):
        ## delete only if file exists ##
        if os.path.exists(self.filename):
            os.remove(self.filename)
        else:
            print("Sorry, I can not remove %s file." % self.filename)

    def execute(self, module):

        # command = "scrapy crawl  {}  -t csv -o {}".format(module, self.filename)
        command = "scrapy crawl  {}  ".format(module)
        cmdline.execute(command.split())


def main():
    utils = Crawler()
    utils.prepare()
    # utils.execute("otto")
    # utils.execute("otto_debug")
    utils.execute("otto_wd")


if __name__ == '__main__':
    main()
