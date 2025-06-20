# syntax=docker/dockerfile:1
FROM varnish:7.6

LABEL maintainer="Instituto Municipal de Deportes de Sevilla <leonardocaballero@gmail.com>" \
      org.label-schema.name="sevilla-imd-website-varnish" \
      org.label-schema.description="Sevilla IMD Website Varnish image." \
      org.label-schema.vendor="Instituto Municipal de Deportes de Sevilla"

COPY etc/varnish.vcl /etc/varnish/default.vcl
