#!/usr/bin/env bash

set +exu

function get_base_path(){
  cd $(dirname $0) && cd .. && pwd
}

BASE_DIR="$(get_base_path)"
BACKEND_DIR="${BASE_DIR}/backend"
BACKEND_REPO='https://github.com/OperationCode/operationcode_backend.git'

echo "Cloning backend repo into $BACKEND_DIR"
git clone $BACKEND_REPO $BACKEND_DIR

echo "Starting backend"
cd $BACKEND_DIR && make build && make db_create && make db_migrate && make run
