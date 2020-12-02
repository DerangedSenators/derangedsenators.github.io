#!/bin/bash
echo "Installing Needed Applications"
apt-get install doxygen python3 python3-pip python3-setuptools tree
pip3 install mkdocs-material mkdocs-awesome-pages-plugin
echo "Done"
echo "Cloning Repository"
git config --global user.email "admin@derangedsenators.me"
git config --global user.name "buildbot"
echo "Removing old Documentation"
rm -r Documentation/
echo "Getting Documentations"
echo "Getting PlayerLink"
mkdir codedoc
mkdir docs
mkdir docs/PlayerLink/
mkdir docs/"Cops And Robbers"/
cd codedoc
git clone https://github.com/derangedsenators/playerlink.git
echo "Getting Cops and Robbers"
git clone https://github.com/derangedsenators/copsandrobbers.git
echo "Done... Building Doxygen Documentation"
cd playerlink
doxygen ../../Doxyfile
./../../doxygen/doxybook2 --input xml/ --output ../../docs/PlayerLink --config ../../doxygen/doxybookcfg_playerlink.json
cd ..
cd copsandrobbers
doxygen ../../Doxyfile
./../../doxygen/doxybook2 --input xml/ --output ../../docs/"Cops And Robbers" --config ../../doxygen/doxybookcfg_copsandrobbers.json
cd ../..
cd docs
mkdir Overview
cd Overview
git clone https://github.com/derangedsenators/collaboration.git
rm -r collaboration/.git
cd ../..
echo "Done... Building Site with MKDOWN-material"
rm -r docs/PlayerLink/Files
rm -r docs/PlayerLink/Pages
rm -r docs/"Cops And Robbers"/Files
rm -r docs/"Cops And Robbers"/Pages
mv -v codedoc/playerlink/docs/* docs/PlayerLink/
mv -v codedoc/copsandrobbers/docs/* docs/"Cops And Robbers"/
cp -R doxygen/overlays/. docs/
mkdocs build --site-dir Documentation
echo "Cleaning up"
rm -r docs
rm -r codedoc
mkdir public
mv * public
echo "All Done!"
