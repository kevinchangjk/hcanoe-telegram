#! /bin/sh

# run this script right after cloning the repo
# for the first time.

rm -f .git/hooks/pre-commit
ln -s $PWD/scripts/pre-commit .git/hooks/pre-commit

# this script automatically generates sidebar to match Home.md
# right after each commit
