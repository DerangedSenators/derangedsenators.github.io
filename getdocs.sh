#!/bin/bash

echo "Installing Needed Applications"
apt-get install doxygen python3 python3-pip python3-setuptools 
pip3 install mkdocs-material
echo "Done"
echo "Cloning Repository"
git config --global user.email "admin@derangedsenators.me"
git config --global user.name "buildbot"
echo "Removing old Documentation"
rm -r Documentation/
rm -r website/
echo "recursive website removed"
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
mkdir public
mv * public
echo "All Done!"
