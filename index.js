const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

// require language
const language = require("./data/languages.json");
const technology = require("./data/technology_details.json");
const blog = require("./data/blog.json");

// root path
app.get("/language", (req, res) => {
  res.send(language);
});

app.get("/technology", (req, res) => {
  res.send(technology);
});

app.get("/blog", (req, res) => {
  res.send(blog);
});

app.get("/singlePart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const matchId = technology.find((singleId) => singleId.id === id);
  res.send(matchId || "data not found");
});

app.get("/language/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const matchId = language.find((singleId) => singleId.id == id);
  res.send(matchId || "data not found");
});

app.listen(port, () => {
  console.log(`Our server running port is ${port}`);
});
