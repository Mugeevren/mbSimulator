FROM nginx
MAINTAINER Müge Evren <muge.evren1@gmail.com>

ARG BUILD_FROM=dist/mbSimulator
COPY dist/mbSimulator/ /usr/share/nginx/html/
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

