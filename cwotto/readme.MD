	
scrapy crawl aliexpress
scrapy crawl aliexpress_browser

scrapyd-deploy local -p cwotto

curl http://192.168.1.106:6800/schedule.json -d project=cwotto -d spider=aliexpress