FROM node:16-alpine As build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine as production

RUN addgroup -S app && adduser -S -G app app

WORKDIR //src/app

COPY package*.json ./

RUN npm install --only=production && rm package.json

COPY server.js .

COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/build ./build
EXPOSE 3000

USER app

CMD ["npm", "run", "server.js"]