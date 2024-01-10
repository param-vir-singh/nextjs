FROM node:21.5.0-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000


CMD [ "npm", "run", "dev" ]