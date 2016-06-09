
pip freeze > requirements.txt

pip install -r requirements.txt

scrapy crawl itunes


scrapyd-deploy itunes -p cwitunes

curl http://45.32.13.151:6800/schedule.json -d project=cwitunes -d spider=itunes

