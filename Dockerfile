FROM node:lts-alpine3.21 AS base_image
RUN npm install -g pnpm@latest-10
WORKDIR /addinputv2
COPY package.json ./
RUN pnpm install

FROM base_image
WORKDIR /addinputv2
COPY . .
RUN pnpm nuxt build
EXPOSE 3000
