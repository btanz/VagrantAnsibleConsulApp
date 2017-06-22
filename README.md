# Client-Server-App using Vagrant, Ansible and Consul

This repository shows how to use Vagrant, Ansible, Consul and Docker for deploying a small app
written in Node.js with a PostgreSQL backend.  

To run the app, clone this repo and run 'vagrant up'. The app will then be available at '127.0.0.1:8080' and will show "Hello, world", retrieved from the database.

Assumptions and notes:

* The host machine has internet access
* VirtualBox is installed
* Prototype / Test environment assumed (DB has no persistent storage etc.)
* Consul is running and can communicate via the bridge with other containers; check for example by running
curl http://172.18.0.2:8500/v1/agent/members?pretty 
on the VM-Host

Next Steps (excerpt):

* Install consul on the www and db server and make the application discover database configuration on startup (not yet implemented) 
* Structure playbooks into roles whenever appropriate

