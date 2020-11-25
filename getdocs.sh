#!/bin/bash

echo "Installing Needed Applications"
apt-get install doxygen python3 python3-pip 
pip3 install mkdocs-material
echo "Done"
echo "Cloning Repository"
git config --global user.email "admin@derangedsenators.me"
git config --global user.name "buildbot"
git clone -b gh-pages https://$1@github.com/derangedsenators/website.git > /dev/null 2>&1
cd website
echo "Removing old Documentation"
rm -r Documentation/
echo "Getting Documentations"
echo "Getting PlayerLink"
mkdir codedoc
cd codedoc
git submodule add https://$1@github.com/derangedsenators/playerlink.git > /dev/null 2>&1
echo "Getting Cops and Robbers"
git submodule add https://$1@github.com/derangedsenators/copsandrobbers.git > /dev/null 2>&1
echo "Done... Building Doxygen Documentation"
doxygen ../Doxyfile
echo "Done... Converting to Markdown"
mkdir ../docs/
./../doxygen/doxybook2 --input xml/ --output ../docs/ --config ../doxygen/doxybookcfg.json
echo "Done... Building Site with MKDOWN-material"
cd ..
rm -r docs/Files
rm -r docs/Pages
mv -v doxygen/overlays/* docs/
mkdocs build --site-dir Documentation
echo "Cleaning up"
rm -r docs
rm -r codedoc
echo "All Done!"
