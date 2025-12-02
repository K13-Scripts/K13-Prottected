const express = require("express");
const fs = require("fs");
const app = express();

// Browser always sees this
app.get("/", (req, res) => {
    res.type("text/plain").send("Protected by Sen V3");
});

// Executors get the real script
app.get("/raw", (req, res) => {
    const script = fs.readFileSync(__dirname + "/script.lua", "utf8");
    res.type("text/plain").send(script);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Running on port " + port));
