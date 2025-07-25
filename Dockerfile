FROM node:lts-alpine3.21
RUN npm install -g pnpm@latest-10
RUN pnpm create vite addinputv2 --template vue
WORKDIR /addinputv2
RUN pnpm install
RUN pnpm install @gravity-ui/uikit
EXPOSE 3000