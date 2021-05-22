const express = require("express");
const path = require("path");

const app = express();
const port = 10000;

app.use(express.static(__dirname + '/public/'));

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(10000, () => {
    console.log(`Started Application on Port: ${port}`)
});