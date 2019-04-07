#!/usr/bin/env bash
set -eu
yarn add now
now --local-config=./now.master.json --token $NOW_TOKEN
now alias --local-config=./now.master.json --token $NOW_TOKEN
