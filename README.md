# Client-Server-App using Vagrant, Ansible and Consul

This repository shows how to use Vagrant, Ansible, Consul and Docker for deploying a small app
written in Node.js with a PostgreSQL backend.  

To run the app, clone this repo and run 'vagrant up'. The app will then be available at '127.0.0.1:8080' and will show "Hello, world", retrieved from the database discovered by the application via consul key-value-store.

Assumptions:
* The host machine has internet access
* VirtualBox is installed
* Prototype / Test environment assumed (DB has no persistent storage etc.)

Notes: 
* Consul is running in server mode (single server) on one container and in client mode on the other containers; run curl http://172.18.0.2:8500/v1/agent/members?pretty 
on the VM-Host to check members of the consul cluster
* The application discovers the db-configuration from consul key-value store; in the current implementation, this is done on a per-request basis

Next Steps:
* Structure playbooks into roles whenever appropriate
* "Promisify" the NodeJS-Application
* If more config for consul is required, use consul config files on agent start (as opposed to start parameters)
* Evaluate using consul-template
* Evaluate using Registrator for service registration/degregistration 

