const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world from zed, and iyass</h1>");
});

app.listen(PORT, () => {
  console.log("App running on " + PORT);
});
