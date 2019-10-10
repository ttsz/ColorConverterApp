FROM node:lts-alpine
LABEL MAINTAINER="Laszlo Toth"

WORKDIR /usr/src/app

COPY app ./app 
COPY package.json ./

RUN npm install --production --silent

EXPOSE 3000

VOLUME [ "/usr/src/app/log" ]

CMD npm start