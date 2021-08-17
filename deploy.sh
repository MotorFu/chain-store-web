#!/usr/bin/env bash

server_host="motorfu"
server_dir="/opt/chain_store/chain-store-web"
REMOTE_DIR="${server_host}:${server_dir}/"


#ssh -t -t ${server_host} "cd ${server_dir}; rm -rf ./*"
#scp -r ./dist/** ${REMOTE_DIR}


ssh -t -t ${server_host} "cd ${server_dir}; ./run.sh $1"
