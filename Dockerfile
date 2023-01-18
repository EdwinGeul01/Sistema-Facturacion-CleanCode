from node:19-alpine3.16
WORKDIR /home/app

COPY . .

run npm install