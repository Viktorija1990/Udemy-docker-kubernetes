const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Hi there. If you makes changes here, you have to rebuild the image!");  
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});