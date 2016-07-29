# deploy to scrapyd

scrapyd-deploy local -p flockcron
curl http://localhost:6800/schedule.json -d project=flockcron -d spider=flock


scrapyd-deploy droplet -p flockcron
curl http://104.236.77.182:6800/schedule.json -d project=flockcron -d spider=flock


# cron jobs
  
  */1 * * * * curl http://localhost:6800/schedule.json -d project=cwpoliticl -d spider=flock
  
  
  */1 * * * * /usr/bin/flock -w 0 /tmp/cron.lock curl http://localhost:6800/schedule.json -d project=cwpoliticl -d spider=flock
    
  
  