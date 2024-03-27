
FROM node:20-alpine

WORKDIR /shop

COPY package*.json ./

COPY tailwind.config.js  postcss.config.js ./

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev
