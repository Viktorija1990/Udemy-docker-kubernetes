# Docker Compose with Multiple Local Containers
## Section 5.

Building the images
```
docker build .
```

Tagging images simpleweb:latest
```
docker build -t visitsweb .
```

Starting up the image 
```
docker run visitsweb
```

*Error: Redis connection to 127.0.0.1:6379 failed*

Create a separate container for redis
```
docker run redis
```

Open up a second window and run:
```
docker run visitsweb
```

The same error message *Error: Redis connection to 127.0.0.1:6379 failed*.

We have got redis app in one container and node app in a separate container. These two containers DO NOT have any automatic communication. We need to set some networking for two separate containers.

* Docker compose is a tool/CLI that gets installed along with Docker.
* It starts up multiple Docker containers at the same time.
* Automates some of the long-winded arguments we were passing to `docker run`.
```
docker-compose
```

`docker build` and `docker run` will be written in a special syntax in .yml configuration file. Also, host and port in redis.createClient in index.js will be added.

If we ever want to rebuild Docker image for node-app we need to specify:
```
docker-compose up --build
```

## Usefull commands

Launch in the background. Starts up Docker containers in the background, so you are able to run other commands in the same window. 
```
docker-compose -d 
```

Stop all Docker containers
```
docker-compose down
```
