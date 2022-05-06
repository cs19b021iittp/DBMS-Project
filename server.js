//@ts-check

const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db");
// var bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.post("/api/query", async (req, res) => {
  const query = await pool.query(req.body.query).catch((error) => {
    console.log(error);
    res.json(error);
    return;
  });
  res.json(query);
});

const port = process.env.PORT || 5001;

app.listen(port, () => `Server running on port ${port}`);
