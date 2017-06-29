FROM node:4-onbuild

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN chmod +x /usr/src/app/start.sh

EXPOSE 80

# expose consul ports
EXPOSE 8300

EXPOSE 8301 8301/udp 8302 8302/udp

EXPOSE 8500 8600 8600/udp

