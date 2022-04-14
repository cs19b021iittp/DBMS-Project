// @ts-check

const fs = require("fs");
const pool = require("./db");

var query1 =
  'CREATE TABLE "test" (\n"id" SERIAL PRIMARY KEY,\n"user_id" int\n)';

var query2 = 'INSERT INTO "test"("user_id")\nVALUES (2)';

var query3 = `SELECT * FROM "cart_items"`;
var query5 = `ALTER TABLE "payment_cards" ALTER COLUMN "cvv" TYPE VARCHAR`;
var query4 = `DELETE from "products" WHERE name = '{prodName}'`;
var query6 = `SELECT seller_name FROM "sellers" WHERE id = 5`;
var query7 = `INSERT INTO "products" ("name", "image", "description", "category", "brand", "seller_id", "price", "left_in_stock", "discount_id") VALUES('{prodName}', '{image}', '{description}', ('furniture'), ('home_centre'), 2, 4, 4, 4);`;
var query8 = `INSERT INTO "discounts"("name", "percent") VALUES ('None', 0)`;
var query9 = `DROP TABLE IF EXISTS "discounts" CASCADE;`;
var query10 = `CREATE TABLE "discounts" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "percent" decimal CHECK("percent" >= 0.0)
);`;
var query11 = `INSERT INTO "discounts"("name", "percent") VALUES ('None', 0)`;
var query12 = `
INSERT INTO "discounts"("name", "percent")
VALUES ('FLAT50', 50);`;

var query13 = `INSERT INTO "discounts"("name", "percent")
VALUES ('MEGADEAL', 80);`;

var query14 = `INSERT INTO "discounts"("name", "percent")
VALUES ('SUPER30', 30);`;

var query15 = `INSERT INTO "discounts"("name", "percent")
VALUES ('BUMPER_DISCOUNT', 70);`;

var query16 = `INSERT INTO "discounts"("name", "percent")
VALUES ('SUMMER_SALE', 20);`;

var query17 = `INSERT INTO "discounts"("name", "percent")
VALUES ('OFFER10', 10);`;

var query18 = `INSERT INTO "discounts"("name", "percent")
VALUES ('GREATER60', 60);`;

var query19 = `INSERT INTO "discounts"("name", "percent")
VALUES ('HOTPINKSALE', 40);`;

var query20 = `INSERT INTO "discounts"("name", "percent")
VALUES ('UPTO30', 30);`;

var query21 = `INSERT INTO "discounts"("name", "percent")
VALUES ('EXTRA20OFF', 20);`;

// var initQueries = [
//   query11,
//   query12,
//   query13,
//   query14,
//   query15,
//   query16,
//   query17,
//   query18,
//   query19,
//   query20,
//   query21,
// ];

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
