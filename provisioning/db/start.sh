#!/bin/bash
./usr/bin/consul/consul agent -retry-join=172.18.0.2 -bind=172.18.0.3 -data-dir="/usr/src/app" -node-id=88a6cd36-2feb-ca54-1c0c-68fed982f4a8
