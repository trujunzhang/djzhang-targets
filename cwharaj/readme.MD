	
scrapy crawl haraj
scrapy crawl haraj_browser

scrapy crawl harajwatch

scrapyd-deploy local -p cwharaj

curl http://192.168.1.106:6800/schedule.json -d project=cwharaj -d spider=haraj