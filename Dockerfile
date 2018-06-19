FROM node:alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm start
