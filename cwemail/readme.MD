	
scrapy crawl email
scrapy crawl email_browser

scrapyd-deploy local -p cwemail

curl http://192.168.1.106:6800/schedule.json -d project=cwemail -d spider=email