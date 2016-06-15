	
scrapy crawl googlelinkedin
scrapy crawl googlelinkedin_browser

scrapyd-deploy local -p cwgooglelinkedin

curl http://192.168.1.106:6800/schedule.json -d project=cwgooglelinkedin -d spider=googlelinkedin