from scrapy import cmdline
import os


class Crawler:
    ## get input ##
    filename = "results.json"

    def prepare(self):
        ## delete only if file exists ##
        if os.path.exists(self.filename):
            os.remove(self.filename)
        else:
            print("Sorry, I can not remove %s file." % self.filename)

    def execute(self, module):
        command = ("scrapy crawl %s" % module)
        cmdline.execute(command.split())

def main():
    utils = Crawler()
    utils.prepare()
    utils.execute("googlelinkedin")
    # utils.execute("googlelinkedin_debug")
    # utils.execute("googlelinkedin_browser")
    # utils.execute("googlelinkedin_browser_debug")

if __name__ == '__main__':
    main()
