FROM node:10.16.3

WORKDIR /home/node/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080

USER node
