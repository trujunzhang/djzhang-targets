# Installation
## Python == 2.7.11

pip freeze > requirements.txt

pip install -r requirements.txt

# run
scrapy crawl politicl
scrapy crawl politicl_browser

# deploy to scrapyd

scrapyd-deploy local -p cwpoliticl
curl http://localhost:6800/schedule.json -d project=cwpoliticl -d spider=dnaindia_debug

scrapyd-deploy droplet -p cwpoliticl
curl http://104.236.77.182:6800/schedule.json -d project=cwpoliticl -d spider=politicl
curl http://104.236.77.182:6800/schedule.json -d project=cwpoliticl -d spider=politicl_watch

curl http://localhost:6800/schedule.json -d project=cwpoliticl -d spider=politicl
curl http://localhost:6800/schedule.json -d project=cwpoliticl -d spider=politicl_watch

*/5 * * * * curl http://104.236.77.182:6800/schedule.json -d project=cwpoliticl -d spider=politicl_watch

. Droplet
{"status": "error", "message": "ImportError: No module named enum", "node_name": "ubuntu-scruby"}

. Xubuntu
Permission denied: '/var/lib/scrapyd/eggs/
run 'python setup.py clean -a bdist_egg -d /tmp/scrapydeploy-8NnURF'

# debug log

item exist  on the cache database

failure,

# Create mysql database

create database politicl;

grant all on politicl.* to 'cwpoliticl' identified by 'cwpoliticl720';

mysql -u cwpoliticl -p 'cwpoliticl720' politicl

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
  
  