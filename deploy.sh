#!/bin/sh
rm -rf assets/vid/
cd assets/
wget https://mrbackslash.it/vidassets.zip
unzip vidassets.zip
rm -rf vidassets.zip
echo 'Video scaricati, se non funziona fai esplodere tutto (o forse no).'