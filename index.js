const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const cors = app(cors());

// require language
const language = require("./data/languages.json");
const technology = require("./data/technology_details.json");

// root path
app.get("/language", (req, res) => {
  res.send(language);
});

app.get("/technology", (req, res) => {
  res.send(technology);
});

app.listen(port, () => {
  console.log(`Our server running port is ${port}`);
});
