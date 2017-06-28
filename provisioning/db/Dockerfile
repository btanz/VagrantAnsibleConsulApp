FROM postgres:9.6

# Create folder for consul and copy it
RUN mkdir -p /usr/bin/consul
COPY ./consul /usr/bin/consul


# Copy initialization scripts. Scripts will run on container start
COPY dbInit.sql /docker-entrypoint-initdb.d/dbInit.sql
COPY start.sh /docker-entrypoint-initdb.d/start.sh


# expose consul ports
EXPOSE 8300
EXPOSE 8301 8301/udp 8302 8302/udp
EXPOSE 8500 8600 8600/udp
