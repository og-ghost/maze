FROM node:14.16.0-alpine

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

RUN apk add --no-cache --virtual .build-deps alpine-sdk python3
RUN rm -rf /var/www/user
RUN mkdir -p /var/www/user
WORKDIR /var/www/user
ADD . /var/www/user
RUN npm install
RUN npm install -g @angular/cli

CMD npm start