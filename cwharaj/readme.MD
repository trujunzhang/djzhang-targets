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


# scrape issues

 1. mysql: insert the ads row failure, (1406, "Data too long for column 'ads_title' at row 1")
    from: 'https://haraj.com.sa/1111467437/زيت_زيتون_فلسطيني_الشرقية_جيزان_نجران_الطايف_ابها_محايل_عسير_حائل_الشمال_المدينه_مكة_الرياض_جدة_أصلي'

 2. mysql: get id on the ads failure, (1267, "Illegal mix of collations (utf8_general_ci,IMPLICIT) and (utf8mb4_general_ci,COERCIBLE) for operation '='")
    mysql: insert the ads row failure, (1366, "Incorrect string value: '\\xF0\\x9F\\x91\\x8D\\xF0\\x9F...' for column 'ads_title' at row 1")
    from: 'http://www.mstaml.com/2081492/👍👍👍_ثلاث_تأشيرات_منزليه_-_بنجلاديش_-_👍👍👍/'
    title: '👍👍👍 ثلاث تأشيرات منزليه - بنجلاديش - 👍👍👍'                  

 3. mysql: get id on the comments failure, (1064, "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'm willing to work in anyplace where people speak English or Arabic. I like worki' at line 1")
    comment: ??
    from: 'https://sa.opensooq.com/ar/search/44710985/%D9%85%D8%B7%D9%84%D9%88%D8%A8-%D9%85%D8%AF%D9%8A%D8%B1-%D9%85%D8%B7%D8%B9%D9%85'             
            
            
            
            
            
            
            
            
            
            