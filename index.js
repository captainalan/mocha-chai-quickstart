const express = require("express");
const app = express();
var onesies = require("./app/onesies");

app.get("/one", (req, res) => {
    res.send(onesies.getOne());
});

app.get("/1", (req, res) => {
    res.send(onesies.get1());
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
