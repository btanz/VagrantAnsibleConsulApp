FROM node:4-onbuild

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN chmod +x /usr/src/app/start.sh

EXPOSE 80


#RUN mkdir -p /usr/bin/consul
#COPY ./consul /usr/bin/consul

# expose console ports
EXPOSE 8300

EXPOSE 8301 8301/udp 8302 8302/udp

EXPOSE 8500 8600 8600/udp

# Run console agent in client mode
#CMD ./consul agent -retry-join=172.18.0.2 -bind=172.18.0.4 -data-dir="/usr/src/app"
