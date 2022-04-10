// @ts-check

const fs = require("fs");
const pool = require("./db");

var initQueries = [];

(async () => {
  fs.readFileSync("./database_schemas/load_data.sql")
    .toString()
    .replace(/\r\n/g, "")
    .split(";")
    .forEach(function (query) {
      if (query.length > 0) {
        initQueries.push(query);
      }
    });

  for (let i = 0; i < initQueries.length; i++) {
    await pool
      .query(initQueries[i])
      .then((returned_data) => {
        // console.log("Returned from Database\n", returned_data);
        console.log(i, "successful");
      })
      .catch((error) => {
        console.log("Error:", error);
        console.log("Database could not be initialized successfully");
        return;
      });
  }
})();
