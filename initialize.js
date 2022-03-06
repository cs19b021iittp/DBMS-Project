// @ts-check

const fs = require("fs");
const pool = require("./db");

var initQueries = [];

(async () => {
  fs.readFileSync("./database.sql")
    .toString()
    .replace(/\r\n/g, "")
    .split(";")
    .forEach(function (query) {
      if (query.length > 0) {
        initQueries.push(query);
      }
    });

  for (let i = 0; i < initQueries.length; i++) {
    await pool.query(initQueries[i]).catch((error) => {
      console.log("Error:", error);
      console.log("Database could not be initialized successfully");
      return;
    });
    console.log(i, "successful");
    if (i === initQueries.length - 1) {
      console.log("Database initialized successfully");
      return;
    }
  }
})();
