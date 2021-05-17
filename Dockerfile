FROM node:lts-alpine

WORKDIR /laetis-diner

ENV NODE_ENV=development

COPY package.json .
COPY yarn.lock .

RUN yarn

RUN yarn global add nuxt

COPY . /laetis-diner