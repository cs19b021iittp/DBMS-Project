//@ts-check

const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.post("/api/todos", async (req, res) => {
  const addTodo = await pool
    .query("DROP TABLE IF EXISTS todo")
    .catch((error) => {
      console.log(error);
      res.json(error);
      return;
    });
  res.json(addTodo);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
