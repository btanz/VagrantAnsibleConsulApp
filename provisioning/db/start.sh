#!/bin/bash
./usr/bin/consul/consul agent -retry-join=172.18.0.2 -bind=172.18.0.3 -data-dir="/usr/bin/consul" -node-id=88a6cd36-2feb-ca54-1c0c-68fed982f4a8 &

# wait until consul agent is running / todo for production: improve this solution, as result may depend on machine speed
sleep 5
ip=$(/sbin/ip -o -4 addr list eth0 | awk '{print $4}' | cut -d/ -f1)
./usr/bin/consul/consul kv put postgres/dbIp $ip
./usr/bin/consul/consul kv put postgres/dbPort 5432
./usr/bin/consul/consul kv put postgres/dbUser admin
