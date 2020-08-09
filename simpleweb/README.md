# Project with Docker. 
## Section 4.

Building the images
```
docker build .
```

Tagging images simpleweb:latest
```
docker build -t simpleweb .
```

Starting up the image 
```
docker run simpleweb
```

Container port mapping. Route incoming requests to port 8080 on localhost to post 8080 inside the container
```
docker run -p 8080:8080 simpleweb
```

Now go to localhost:8080 on the browser.