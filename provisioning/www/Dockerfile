FROM node:4-onbuild

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 80


#RUN mkdir -p /usr/bin/consul
#COPY ./consul /usr/bin/consul

# expose console ports
EXPOSE 8300

EXPOSE 8301 8301/udp 8302 8302/udp

EXPOSE 8500 8600 8600/udp
