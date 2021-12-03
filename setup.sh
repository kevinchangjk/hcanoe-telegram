#! /bin/sh

NORMAL="\e[1;0m"
BLACK="\e[1;30m"
RED="\e[1;31m"
GREEN="\e[1;32m"
YELLOW="\e[1;33m"
BLUE="\e[1;34m"
MAGENTA="\e[1;35m"
CYAN="\e[1;36m"
WHITE="\e[1;37m"

function setup() {
  printf "[${YELLOW}starting setup...${NORMAL}]\n"
  mv -f hcanoe-telegram hcanoe-telegram.bak &> /dev/null
  git clone git@github.com:$GIT_USERNAME/hcanoe-telegram.git hcanoe-telegram
  cd hcanoe-telegram
  clasp clone 1V0CzP2zK8MfYGOfJwXX4xJqwIu1CXvzH0UzhBdv3S2yz-mmG_nOMX0gn
  git checkout .
  printf "[${YELLOW}setup done.${NORMAL}]\n"
}

read -p "Enter your Github username: " GIT_USERNAME
printf "Set up project in a new folder ${YELLOW}hcanoe-telegram${NORMAL}? (y/n): "
read CONFIRM
[ $CONFIRM = "y" ] && setup
[ $CONFIRM = "n" ] && printf "\nSetup terminated.\n"
printf ""

# mkdir hcanoe-telegram
# # git clone git@github.com:<your-github-username>/hcanoe-telegram.git
# # clasp clone 1V0CzP2zK8MfYGOfJwXX4xJqwIu1CXvzH0UzhBdv3S2yz-mmG_nOMX0gn
# git checkout .
