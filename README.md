# Client-Server-App using Vagrant, Ansible and Consul

This repository shows how to use Vagrant, Ansible and Consul for deploying a small app
written in Node.js with a PostgreSQL backend.  

The version of this hosted on [HashiCorp's Docker Hub for Consul](https://hub.docker.com/r/hashicorp/consul/)
is built from the same source as the [Consul Official Image](https://hub.docker.com/_/consul/).

There are several pieces that are used to build this image:

* We start with an Alpine base image and add CA certificates in order to reach
  the HashiCorp releases server. These are useful to leave in the image so that
  the container can access Atlas features as well.
* Official HashiCorp builds of some base utilities are then included in the
  image by pulling a release of docker-base. This includes dumb-init and gosu.
  See https://github.com/hashicorp/docker-base for more details.
* Finally a specific Consul build is fetched and the rest of the Consul-specific
  configuration happens according to the Dockerfile.
