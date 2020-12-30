const express = require("express");
const app = express();


app.get("/",(req, res) => {
    res.send("Hello World from Express by Gaurav");
});

app.get("/about", (req, res) => {
    res.status(200).send("Welcome to About Page");
});

app.listen(7000, () => {
    console.log("Listening the port at 7000");
});