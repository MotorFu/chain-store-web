#!/usr/bin/env bash

git pull;

pids=`lsof -i:8000 | awk '{print $2;}'`


for pid in $pids
        do
		if [ "$pid" != "PID" ]; then
			echo "pid--->$pid"
			kill $pid
		fi
        done

rm -rf /opt/chain_store/output.log;
yarn install;
nohup yarn start:pre >> /opt/chain_store/output.log 2>&1 &
