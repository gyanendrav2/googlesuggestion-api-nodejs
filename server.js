const express = require("express");
const app = express();
const PORT = 4000;
const request = require("request-promise");
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  
  return res.status(200).send('<div><h1>Server is running</h1><h6>API Endpoints</h6><p>/google-suggestion</p></div>');
});

app.get("/google-suggestion", async (req, res) => {
  const { q } = req.query;
  const result = await request(
    `https://suggestqueries.google.com/complete/search?client=firefox&q=${q}`
  );
  return res.status(200).send(result);
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
