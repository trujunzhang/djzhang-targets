	
scrapy crawl googleplay --output results.json

scrapyd-deploy local -p cwgoogleplay

curl http://192.168.1.106:6800/schedule.json -d project=cwgoogleplay -d spider=googleplay