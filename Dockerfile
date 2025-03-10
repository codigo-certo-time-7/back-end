FROM node:18-slim

WORKDIR /app

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV PORT=3000

RUN apt-get update -y && apt-get install -y openssl
RUN npm i

RUN npx prisma db pull
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm","run", "start:prod"]
