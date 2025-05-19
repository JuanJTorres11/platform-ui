FROM node:23.11.1-alpine3.21
WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY . .
RUN npx next build

EXPOSE 8080
CMD ["npx", "next", "start", "--", "-p", "8080"]
