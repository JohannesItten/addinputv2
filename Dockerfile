FROM node:lts-alpine3.21 AS baseImage
RUN npm install -g pnpm@latest-10
WORKDIR /addinputv2
COPY package.json ./
RUN pnpm install

FROM baseImage
WORKDIR /addinputv2
COPY . .
RUN pnpm nuxt build
EXPOSE 3000
