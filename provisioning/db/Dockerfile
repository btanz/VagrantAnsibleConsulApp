FROM postgres:9.6

# Copy and run initialization script.
COPY dbInit.sql /docker-entrypoint-initdb.d/dbInit.sql
#RUN psql app -U admin -f /dbInit.sql
