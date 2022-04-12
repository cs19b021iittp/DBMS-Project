// @ts-check

const fs = require("fs");
const pool = require("./db");

var query1 =
  'CREATE TABLE "test" (\n"id" SERIAL PRIMARY KEY,\n"user_id" int\n)';

var query2 = 'INSERT INTO "test"("user_id")\nVALUES (2)';

var query3 = `SELECT * FROM "sellers"`;
var query5 = `ALTER TABLE "payment_cards" ALTER COLUMN "cvv" TYPE VARCHAR`;
var query4 = `DELETE from "buyers" WHERE first_name = 'test'`;
var query6 = `DELETE from "addresses" WHERE city = 'test'`;

var initQueries = [query3];

(async () => {
  // fs.readFileSync("./database_schemas/load_data.sql")
  //   .toString()
  //   .replace(/\r\n/g, "")
  //   .split(";")
  //   .forEach(function (query) {
  //     if (query.length > 0) {
  //       initQueries.push(query);
  //     }
  //   });

  for (let i = 0; i < initQueries.length; i++) {
    await pool
      .query(initQueries[i])
      .then((returned_data) => {
        console.log("Returned from Database\n", returned_data);
        console.log(i, "successful");
      })
      .catch((error) => {
        console.log("Error:", error);
        console.log("Database could not be initialized successfully");
        return;
      });
  }
})();
