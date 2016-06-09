	
scrapy crawl itune
scrapy crawl itune_browser

scrapyd-deploy local -p cwitune

curl http://192.168.1.106:6800/schedule.json -d project=cwitune -d spider=itune