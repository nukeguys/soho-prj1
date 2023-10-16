const express = require("express");
const data = require("./data.json");

const app = express();
app.use(express.json());

app.use(express.static(__dirname + "/views"));

app.use("/autocomplete", (req, res) => {
  const { keyword } = req.query;
  const hasSearchKeyword = data.autocomplete.hasOwnProperty(keyword);
  const result = hasSearchKeyword ? data.autocomplete[keyword] : [];

  res.status(200).send(result);
});

const listenPort = 3000;
app.listen(listenPort, "127.0.0.1", () => {
  console.log("http://localhost:" + listenPort);
});
