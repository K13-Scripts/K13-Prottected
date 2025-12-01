const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Your hidden lua script (this stays private)
const luaScript = `
loadstring(game:HttpGet('https://raw.githubusercontent.com/K13-Scripts/K13/refs/heads/main/print(%22Skid%22).lua'))()
`;

app.get("/script", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(luaScript);
});

app.listen(PORT, () => console.log("Server is running"));
