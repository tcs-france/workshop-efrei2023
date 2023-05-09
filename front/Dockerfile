FROM node:19

WORKDIR /front

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
