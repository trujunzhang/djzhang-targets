# Installation
## Python == 2.7.11

pip freeze > requirements.txt

pip install -r requirements.txt

# run
scrapy crawl jetbrains

# deploy to scrapyd

scrapyd-deploy local -p cwjetbrains
curl http://localhost:6800/schedule.json -d project=cwjetbrains -d spider=dnaindia_debug

scrapyd-deploy droplet -p cwjetbrains

curl http://104.236.77.182:6800/schedule.json -d project=cwjetbrains -d spider=jetbrains_watch

scrapyd-deploy client -p cwjetbrains
curl http://139.59.11.152:6800/schedule.json -d project=cwjetbrains -d spider=jetbrains
curl http://139.59.11.152:6800/schedule.json -d project=cwjetbrains -d spider=jetbrains_watch

curl http://localhost:6800/schedule.json -d project=cwjetbrains -d spider=jetbrains
curl http://localhost:6800/schedule.json -d project=cwjetbrains -d spider=jetbrains_watch
curl http://localhost:6800/schedule.json -d project=cwjetbrains -d spider=jetbrains_whole_pages

*/5 * * * * curl http://104.236.77.182:6800/schedule.json -d project=cwjetbrains -d spider=jetbrains_watch

ssh root@139.59.11.152 -p 22

. Droplet
{"status": "error", "message": "ImportError: No module named enum", "node_name": "ubuntu-scruby"}

# debug log
item exist  on the cache database

failure,

# Create mysql database

create database jetbrains;

grant all on jetbrains.* to 'cwjetbrains' identified by 'cwjetbrains720';

mysql -u cwjetbrains -p 'cwjetbrains720' jetbrains

# scrape issues

 1. Access denied | theviewspaper.net used CloudFlare to restrict access
  fixed: using "https://github.com/Anorov/cloudflare-scrape"
   
 2. xmlrpc.php: 413 Request Entity Too Large
  fixed: client_max_body_size 20M; (from: 'http://www.daveperrett.com/articles/2009/11/18/nginx-error-413-request-entity-too-large/')
  
 3. Upload too large image(more than 1M) to the wordpress failure on the 'theviewspaper' website 
   'http://theviewspaper.net/wp-content/uploads/WordsOfTerror-1024x576.jpg'
   
 4. # not found any tags on the detailed page of the 'news18'.
 
 # requirements
 
  1. Instead of the first 2 paragraphs can we limit the content to 150 words even if we have to scraper more than 2 paragraphs
  
  