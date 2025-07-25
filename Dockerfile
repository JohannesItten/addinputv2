FROM node:lts-alpine3.21
RUN npm install -g pnpm@latest-10
WORKDIR /addinputv2
# CMD ["pnpm", "dev", "-o"]
EXPOSE 3000