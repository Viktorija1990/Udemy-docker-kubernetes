# Specify a base image
FROM node:alpine

# Nicely isolates our files in a chose directory
WORKDIR /usr/app

# Minimize cache busting:
# By having COPY split and repeated two times,
# we force cache being used for RUN step since
# that step might take a lot of time to finish

# This set up is handy in case we only make changes in index.js file.
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Path to copy the folder from on my mashine and 
# path to copy stuff to inside the container
# This command copies all the files
COPY ./ ./

# Default command
CMD ["npm", "start"]