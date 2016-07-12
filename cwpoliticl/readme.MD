# Installation
## Python == 2.7.11

pip freeze > requirements.txt

pip install -r requirements.txt

	
scrapy crawl politicl
scrapy crawl politicl_browser

scrapyd-deploy local -p cwpoliticl

curl http://192.168.1.106:6800/schedule.json -d project=cwpoliticl -d spider=politicl