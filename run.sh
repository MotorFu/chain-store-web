#!/usr/bin/env bash

git pull;
kill 8000;
rm -rf ../output.log;
yarn install;
nohup yarn start ./output.log 2>&1 &