FROM node:lts-alpine3.21
RUN npm install -g pnpm@latest-10
WORKDIR /addinputv2
EXPOSE 3000