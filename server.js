const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

/*
  🔒 YOUR SCRIPT GOES HERE
  This is the protected script stored inside Render.

  Nobody can see this file except YOU.
*/
const protectedScript = `
loadstring(game:HttpGet('https://raw.githubusercontent.com/K13-Scripts/K13/refs/heads/main/print(%22Skid%22).lua'))()
`;

/*
  🔥 PUBLIC ENDPOINT
  This sends ONLY the script content.
  People CANNOT see server.js or package.json — only the RESULT.
*/
app.get("/", (req, res) => {
    res.type("text/plain");
    res.send(protectedScript);
});

app.listen(PORT, () => {
    console.log("🔥 Protected API running on port " + PORT);
});
