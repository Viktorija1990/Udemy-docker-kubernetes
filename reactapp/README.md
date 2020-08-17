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

Now go to localhost:3000 on the browser.

### Docker volumes

Docker volumes can be used to share files between a host system and the Docker container, more specifically, to make data from inside the container accessible on the host machine.

For example, let’s say you wanted to use the official Docker Nginx image and keep a permanent copy of Nginx’s log files to analyze later. By default, the nginx Docker image will log to the /var/log/nginx directory inside the Docker Nginx container. Normally it’s not reachable from the host filesystem.

In our case, let's say we made changes in App.js and we want this change to appear inside that running container without us stopping, rebuilding the image and restarting the container.

Once you make a change in App.js, rebuild the Dockerfile:

```
docker build -f Dockerfile.dev .
```

```
docker run -it -p 3000:3000 -v /app/node_modules -v C:/Users/Viktorija/MyGit/Udemy-docker-kubernetes/reactapp/frontend:/app CONTAINER_ID
```

Now go to localhost:3000 on the browser. You will be able now to see the changes made in App.js. 

#### Docker Compose & Volumes

Create a file docker-compose.yml and additionaly specify volumes.

Then, run `docker-compose up`. That won't work. We have to make adjustments to be able to rebuild Dockerfile.dev within docker-compose.yml (4th row).

Solution: add `context: .` and `dockerfile: Dockerfile.dev` in docker-compose.yml build section.

### Executing tests

Get CONTAINER_ID>
```
docker build -f Dockerfile.dev .
```

This will run tests that are in App.test.js file:
```
docker run -it CONTAINER_ID npm run test
```

#### 1.Live updating tests

If we want to make changes in our test file App.test.js file and avoid adding volumes like above, there is a workaround. The downside: It is not the best solution though, hard to remember!

Get existing container's CONTAINER_ ID:
```
docker ps
```

Go into running container and execute the command below. This will react to the changes added to App.test.js file live:
```
docker exec -it CONTAINER_ID npm run test
```

#### 2.Docker compose for running tests

We add one more service (tests) in docker-compose.yml file. The downside: we are getting output of tests inside of logging interface of docker compose and we dont have ability (for stdin) to press enter for example to rerun tests or hit w to get some options to appear.

### Prod env

NGINX will be used, popular web server, it's just about taking incoming traffic and responding to it with some static files. We will create a separate Docker file which is gonna create a prod version of our container. For that we will need:

Dockerfile with multi step builds. Two FROM blocks within the same Dockefile (not Dockerfile.dev). Then run:

```
docker build .
```

and 

```
docker run -it -p 3000:3000 CONTAINER_ID
```