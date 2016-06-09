	
scrapy crawl github --output results.json

scrapyd-deploy local -p cwgithub

curl http://192.168.1.106:6800/schedule.json -d project=cwgithub -d spider=github