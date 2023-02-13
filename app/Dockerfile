FROM node:18-alpine
WORKDIR /server
COPY package*.json ./
RUN npm i
COPY . /server
EXPOSE 80
CMD ["npm", "run", "dev"]   