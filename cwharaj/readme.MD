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

found the deleted item count: 0 by model_id

failure,

mysql: get count on the

special sections, count

no tag_r in the sections, count

Empty page on

converting to utf-8 exception on the get_guid()

# Create mysql database

create database mzadalny;

grant all on mzadalny.* to 'mzada' identified by 'mzada720';

mysql -u mzada -p 'mzada720' mzadalny


# harajs issues

 1. mysql: insert the ads row failure, (1406, "Data too long for column 'ads_title' at row 1")
    from 'https://haraj.com.sa/1111467437/زيت_زيتون_فلسطيني_الشرقية_جيزان_نجران_الطايف_ابها_محايل_عسير_حائل_الشمال_المدينه_مكة_الرياض_جدة_أصلي'

            
            
            
            
            
            
            
            
            
            
            
            
            