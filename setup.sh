#! /bin/sh

NORMAL="\e[1;0m"
YELLOW="\e[1;33m"

function setup() {
  printf "[${YELLOW}starting setup...${NORMAL}]\n"

  # backup an existing folder if any
  mv -f hcanoe-telegram hcanoe-telegram.bak &> /dev/null

  # clone the repo
  git clone git@github.com:$GIT_USERNAME/hcanoe-telegram.git hcanoe-telegram
  cd hcanoe-telegram

  # set upstream remote
  git remote add upstream git@github.com:hcanoe/hcanoe-telegram.git

  # pull latest updates from clasp
  clasp clone 19u4j16riV0fL_Tdnbpx30VdR6zTMDouLC3E3QD41DI77AMAiONqLNSke

  # just in case
  git checkout .

  printf "[${YELLOW}setup done.${NORMAL}]\n"
}

read -p "Enter your Github username: " GIT_USERNAME
printf "Set up project in a new folder ${YELLOW}./hcanoe-telegram${NORMAL}? (y/n): "
read CONFIRM
[ $CONFIRM = "y" ] && setup
[ $CONFIRM = "n" ] && printf "\nSetup terminated.\n"
printf ""

unset GIT_USERNAME CONFIRM
