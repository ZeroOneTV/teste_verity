FROM node:18.16.0

WORKDIR /var/www/api

# OS TOOLS
RUN apt-get update -y && apt-get upgrade -y

COPY ./package.json .
COPY ./ .

RUN apt-get install -y git
RUN npm i --quiet
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]