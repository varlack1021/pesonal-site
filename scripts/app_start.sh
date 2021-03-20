cd /home/ec2-user/server/src
sudo pm2 start npm --name "personal-website" -- start
sudo pm2 startup
sudo pm2 save
sudo pm2 restart all