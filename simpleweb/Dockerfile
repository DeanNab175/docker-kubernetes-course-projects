# Specify a base image
FROM node:22-alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command 
CMD ["npm", "start"]