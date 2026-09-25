#!/bin/bash

date
curl -s http://localhost:3017/status | jq .

date
curl -s http://localhost:3017/scania/info | jq .

date
curl -s http://localhost:3017/vw/info | jq .
