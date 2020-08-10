# Creating a Production-Grade Flow 
## Section 6.

Check if node is installed
```
node -v
```

Create React App Generation (created a folder frontend)
```
npm uninstall -g create-react-app

npx create-react-app frontend
```

* npm run start - starts up *development* server. For development use only
* npm run test - Runs tests associated with the project
* npm run build - Builds a *production* version of the application


`cd reactapp/frontend` and run `npm run test`. q to exit.

`cd reactapp/frontend/build/static/js` contains now the file:

* main.23169dfd.chunk.js -  this is our application. We will need this file and index.html in build folder later on.

### Creating the Dev Dockerfile

This won't work.
```
docker build .
```

Only this:
```
docker build -f Dockerfile.dev .
```

### React app and Docker

Due to a recent update in the Create React App library, we will need to change how we start our containers.

In the upcoming lecture, you'll need to add the -it flag to run the container in interactive mode:

```
docker run -it -p 3000:3000 CONTAINER_ID
```