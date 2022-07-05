FROM node:16.1.0
WORKDIR /usr/src/app
COPY ./* ./
RUN npm install
CMD ["node", "./index.js"]