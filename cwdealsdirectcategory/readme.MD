	
scrapy crawl dealsdirect --output results.json

scrapyd-deploy local -p cwdealsdirectcategory

curl http://192.168.1.106:6800/schedule.json -d project=cwdealsdirectcategory -d spider=dealsdirect