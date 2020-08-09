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

Container port mapping. Route incoming requests to port 8080 (it can be any port number) on localhost to port 8080 inside the container (has to match what we have specified in index.js file)
```
docker run -p 8080:8080 simpleweb
```

Now go to localhost:8080 on the browser.

Type commands inside the container or see sontainer's files
```
docker run -it simpleweb sh
```