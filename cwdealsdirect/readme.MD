
pip install https://github.com/sosign/scrapy-webdriver/archive/master.zip
	
scrapy crawl dealsdirect

scrapyd-deploy local -p cwdealsdirect

curl http://192.168.1.106:6800/schedule.json -d project=cwdealsdirect -d spider=dealsdirect

