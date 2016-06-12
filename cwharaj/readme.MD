# Installation
## Python == 2.7.11

pip freeze > requirements.txt

pip install -r requirements.txt


# run 	
scrapy crawl haraj

scrapy crawl haraj_browser

scrapy crawl harajwatch

# deploy to scrapyd

scrapyd-deploy local -p cwharaj

curl http://192.168.1.106:6800/schedule.json -d project=cwharaj -d spider=haraj



# debug log

item exist  on the cache database

found the deleted item count: 0

# Create mysql database

create database vps_scrapy_rails;

grant all on vps_scrapy_rails.* to 'haraj' identified by 'haraj720';

mysql -u haraj -p 'haraj720' vps_scrapy_rails


# mysql issues

'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \\'://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-ا\\' at line 1'

            
            
            

            
            
            
            
            
            
            
            
            
            
            
            
            