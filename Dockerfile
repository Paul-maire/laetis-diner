FROM node:current-alpine

WORKDIR /laetis-diner

ENV NODE_ENV=development

RUN set -ex; \
	yarn global add nuxt;

COPY . /laetis-diner

RUN yarn
