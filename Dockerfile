# Base image
FROM node:16-alpine

# Create app directory
WORKDIR /usr/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
CMD [ -d "node_modules" ] && npm run start:dev || npm i && npm run start:dev