# Specify a base image
FROM node:alpine

# Path to copy the folder from on my mashine and 
# path to copy stuff to inside the container
COPY ./ ./

# Install some dependencies
RUN npm install

# Default command
CMD ["npm", "start"]