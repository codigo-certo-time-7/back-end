FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma db pull
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm","run", "start:prod"]
