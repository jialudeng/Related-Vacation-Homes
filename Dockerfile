FROM node:12.16.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install pm2 -g

RUN yarn install

EXPOSE 3000

CMD [ "npm", "run", "start" ]