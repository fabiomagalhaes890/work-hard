


### STAGE 1: Build ###
FROM node:alpine AS builder
RUN npm install -g @angular/cli
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /src/app/dist/work-hard /usr/share/nginx/html