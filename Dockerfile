# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the rest of the application code to the working directory
COPY ./ ./

# ENV

ENV IS_DOCKER=true

# Install dependencies
RUN npm i

# Expose the port the app runs on
EXPOSE 4321

# Command to run the application
CMD ["npm", "run", "dev"]
