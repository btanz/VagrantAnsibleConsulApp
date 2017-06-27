#!/bin/bash
npm start &
./consul agent -retry-join=172.18.0.2 -bind=172.18.0.4 -data-dir="/usr/src/app"
