# Etapa 1: Ambiente de desenvolvimento
FROM node:20

WORKDIR /app

COPY package*.json yarn.lock* ./
RUN yarn install

COPY . .

CMD ["yarn", "dev", "--host", "0.0.0.0"]
