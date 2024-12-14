const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Server running and waiting...");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
