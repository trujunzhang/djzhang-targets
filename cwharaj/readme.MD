# Installation
## Python == 2.7.11

pip freeze > requirements.txt

pip install -r requirements.txt


# run 	
scrapy crawl haraj

scrapy crawl haraj_browser

scrapy crawl harajwatch

# deploy to scrapyd

scrapyd-deploy digitalocean -p cwharaj

curl http://104.236.77.182:6800/schedule.json -d project=cwharaj -d spider=harajwatch

curl http://localhost:6800/schedule.json -d project=myproject -d spider=spider2



# debug log

item exist  on the cache database

invalide picture url from the haraj.sa

found the deleted item count: 0

failure,

mysql: get count on the

special sections, count

no tag_r in the sections, count

Empty page on

# Create mysql database

create database mzadalny;

grant all on mzadalny.* to 'haraj' identified by 'haraj720';

mysql -u haraj -p 'haraj720' mzadalny


# mysql issues

'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \\'://sa.opensooq.com/ar/search/30002057/استراحة-سديم-للايجار-ا\\' at line 1'
            
'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 's Included\nGauge\n2 Alkaline batteries AAA 1.5V\nInstruction manual\nSoft pouch wit' at line 1"
            
            

            
            
            
            
            
            
            
            
            
            
            
            
            