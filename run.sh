#!/usr/bin/env bash

git pull;

pids=`lsof -i:8001 | awk '{print $2;}'`


for pid in $pids
        do
		if [ "$pid" != "PID" ]; then
			echo "pid--->$pid"
			kill $pid
		fi
        done

rm -rf /opt/chain_store/output.log;
yarn install;
yarn upgrade;
nohup yarn serve >> /opt/chain_store/output.log 2>&1 &
