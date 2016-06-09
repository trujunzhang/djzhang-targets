	
scrapy crawl aliexpress
scrapy crawl aliexpress_browser

scrapyd-deploy local -p cwaliexpress

curl http://192.168.1.106:6800/schedule.json -d project=cwaliexpress -d spider=aliexpress