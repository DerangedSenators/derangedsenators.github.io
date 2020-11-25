#!/bin/bash

echo "Installing Needed Applications"
apt-get install doxygen python3 python3-pip python3-setuptools tree
pip3 install mkdocs-material
echo "Done"
echo "Cloning Repository"
git config --global user.email "admin@derangedsenators.me"
git config --global user.name "buildbot"
echo "Removing old Documentation"
rm -r Documentation/
echo "Getting Documentations"
echo "Getting PlayerLink"
mkdir codedoc
git submodule add https://$BUILD_BOT_SECRET@github.com/derangedsenators/playerlink.git codedoc > /dev/null 2>&1
echo "Getting Cops and Robbers"
git submodule add https://$BUILD_BOT_SECRET@github.com/derangedsenators/copsandrobbers.git codedoc > /dev/null 2>&1
echo "Done... Building Doxygen Documentation"
cd ..
doxygen Doxyfile
echo "Done... Converting to Markdown"
mkdir docs/
./doxygen/doxybook2 --input xml/ --output ../docs/ --config ../doxygen/doxybookcfg.json
echo "Done... Building Site with MKDOWN-material"
cd ..
rm -r docs/Files
rm -r docs/Pages
mv -v doxygen/overlays/* docs/
mkdocs build --site-dir Documentation
echo "Cleaning up"
rm -r docs
rm -r codedoc
mkdir path
mv * path
echo "All Done!"
