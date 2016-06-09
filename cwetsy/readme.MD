	
scrapy crawl etsy
scrapy crawl etsy_browser

scrapyd-deploy local -p cwetsy

curl http://192.168.1.106:6800/schedule.json -d project=cwetsy -d spider=etsy