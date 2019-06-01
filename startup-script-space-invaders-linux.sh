#! /bin/bash

apt-get update
apt-get install -y git apache2

cd /var/www/html
rm index.html -f

git init
git pull https://github.com/roitraining/space-invaders.git

ZONE=$(curl  "http://metadata.google.internal/computeMetadata/v1/instance/zone" -H "Metadata-Flavor: Google")
sed -i "s|zone-here|$ZONE|" index.html
