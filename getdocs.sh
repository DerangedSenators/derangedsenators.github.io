#!/bin/bash
$SECRETKEY = $1
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
mkdir docs
mkdir docs/playerlink/
mkdir docs/copsandrobbers/
cd codedoc
git clone https://github.com/derangedsenators/playerlink.git
echo "Getting Cops and Robbers"
git clone https://github.com/derangedsenators/copsandrobbers.git
echo "Done... Building Doxygen Documentation"
cd playerlink
doxygen ../../Doxyfile
./../../doxygen/doxybook2 --input xml/ --output ../../docs/playerlink --config ../../doxygen/doxybookcfg.json
cd ..
cd copsandrobbers
doxygen ../../Doxyfile
./../../doxygen/doxybook2 --input xml/ --output ../../docs/copsandrobbers --config ../../doxygen/doxybookcfg.json
cd ../..
cd docs
git clone https://github.com/derangedsenators/collaboration.git
rm -r collaboration/.git
cd ..
echo "Done... Building Site with MKDOWN-material"
rm -r docs/playerlink/Files
rm -r docs/playerlink/Pages
rm -r docs/copsandrobbers/Files
rm -r docs/copsandrobbers/Pages
cp -R doxygen/overlays/. docs/
mv docs/copsandrobbers docs/Cops And Robbers
mv docs/playerlink docs/PlayerLink
mkdocs build --site-dir Documentation
echo "Cleaning up"
rm -r docs
rm -r codedoc
mkdir public
mv * public
echo "All Done!"
