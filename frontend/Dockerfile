# syntax=docker/dockerfile:1
ARG VOLTO_VERSION
ARG RAZZLE_INTERNAL_API_PATH
FROM plone/frontend-builder:${VOLTO_VERSION:-18.23.0} AS builder

COPY --chown=node packages/volto-sevilla-imd-website /app/packages/volto-sevilla-imd-website
COPY --chown=node volto.config.js /app/
COPY --chown=node package.json /app/package.json.temp
COPY --chown=node mrs.developer.json /app/
COPY --chown=node pnpm-workspace.yaml /app/

RUN --mount=type=cache,id=pnpm,target=/app/.pnpm-store,uid=1000 <<EOT
    set -e
    python3 -c "import json; orig_data = json.load(open('package.json.temp')); orig_deps = orig_data['dependencies']; data = json.load(open('package.json')); data['dependencies'].update(orig_deps); json.dump(data, open('package.json', 'w'), indent=2)"
    rm package.json.temp
    pnpm dlx mrs-developer missdev --no-config --fetch-https
    pnpm install && pnpm build:deps
    pnpm build
    pnpm install --prod
EOT

FROM plone/frontend-prod-config:${VOLTO_VERSION:-18.23.0}

LABEL maintainer="Instituto Municipal de Deportes de Sevilla <leonardocaballero@gmail.com>" \
      org.label-schema.name="sevilla-imd-website-frontend" \
      org.label-schema.description="Sevilla IMD Website frontend image." \
      org.label-schema.vendor="Instituto Municipal de Deportes de Sevilla"

COPY --from=builder /app/ /app/

RUN <<EOT
    set -e
    npm i -g corepack@latest && corepack enable pnpm
    corepack use pnpm@9.1.1
    corepack prepare pnpm@9.1.1 --activate
EOT
