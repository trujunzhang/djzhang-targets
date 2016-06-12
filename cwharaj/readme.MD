	
scrapy crawl haraj
scrapy crawl haraj_browser

scrapy crawl harajwatch

scrapyd-deploy local -p cwharaj

curl http://192.168.1.106:6800/schedule.json -d project=cwharaj -d spider=haraj

pip freeze > requirements.txt
pip install -r requirements.txt


item exist  on the cache database

found the deleted item count: 0

create database vps_scrapy_rails;
grant all on vps_scrapy_rails.* to 'haraj' identified by 'haraj720';


[mysql -u haraj -p 'haraj720' vps_scrapy_rails]
