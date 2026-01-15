#!/usr/bin/env bash
set -e

wget https://github.com/hakimel/reveal.js/archive/master.zip
unzip -o master.zip
rm master.zip
rm -rf ./revealjs
mv reveal.js-master/dist ./revealjs
mv reveal.js-master/plugin ./revealjs/plugin
rm -rf reveal.js-master
echo 'reveal.js has been updated.'
