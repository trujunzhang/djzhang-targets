# deploy to scrapyd

scrapyd-deploy local -p flockcron
curl http://localhost:6800/schedule.json -d project=flockcron -d spider=flock


scrapyd-deploy droplet -p flockcron
curl http://104.236.77.182:6800/schedule.json -d project=flockcron -d spider=flock


# cron jobs
  
  * * * * * curl http://localhost:6800/schedule.json -d project=flockcron -d spider=flock
  
  
  * * * * * /usr/bin/flock -w 0 /tmp/flockcron.lock curl http://localhost:6800/schedule.json -d project=flockcron -d spider=flock
  
  
fuser -v /tmp/flockcron.lock
    
  
  