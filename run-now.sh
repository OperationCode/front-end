#!/usr/bin/env bash
set -eu
curl "https://api.zeit.co/v2/now/deployments" \
  -H "Authorization: Bearer $NOW_TOKEN"
yarn add now
now --local-config=./now.master.json --token $NOW_TOKEN
now alias --local-config=./now.master.json --token $NOW_TOKEN
