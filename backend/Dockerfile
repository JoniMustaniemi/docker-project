FROM node:16-alpine as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production && rm package.json

COPY server.js ./
COPY src ./src

EXPOSE 8080

CMD ["node", "server.js"]
