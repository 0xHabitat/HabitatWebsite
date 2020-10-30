FROM node:14-alpine
RUN apk add git
RUN yarn global add https://github.com/pinkiebell/ipfs-tools
WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build
RUN pin=1 ipfs-publish public/
