const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send("Alkari");
});

app.listen(5000, () => console.log("Running on port 5000"));
