import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

from cwharaj.spiders.haraj_spider import HarajsSpider
from cwharaj.spiders.harajwatch_spider import HarajsSpiderWatch

process = CrawlerProcess(get_project_settings())
process.crawl(HarajsSpider)
process.crawl(HarajsSpiderWatch)

# the script will block here until all crawling jobs are finished
process.start()
