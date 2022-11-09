FROM node
RUN npm install -g @angular/cli
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
cmd ["npm","start"]