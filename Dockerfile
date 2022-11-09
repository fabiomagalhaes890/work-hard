FROM node as builder

WORKDIR /src/app

RUN npm install -g @angular/cli

COPY package.json ./

RUN npm install
COPY src/ ./src/
RUN npm run build

FROM nginx
COPY --from=builder /src/app/build/ /src/share/nginx/html