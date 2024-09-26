# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json .

# RUN npm i

# COPY . .

# EXPOSE 5173

# CMD ["npm","run","dev"]

# Use Node.js 18 Alpine as base image
FROM node:21-alpine

# Install Python and necessary build tools
RUN apk add --no-cache python3 make g++ pkgconfig cairo-dev jpeg-dev pango-dev giflib-dev


# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 5173
EXPOSE 5173

# Run the application in development mode
CMD [ "npm", "run", "dev" ]
