// @ts-check

const fs = require("fs");
const pool = require("./db");

var query28 =
  'CREATE TABLE "test" ("id" SERIAL PRIMARY KEY, "timestamp" timestamp)';

var timestamp = new Date().toISOString();
// console.log(timestamp);
var query29 = `INSERT INTO "test" ("timestamp") VALUES ('${timestamp}')`;

var query2 = 'INSERT INTO "test"("user_id")\nVALUES (2)';

var query3 = `SELECT * FROM "order_items";`;
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

var query22 = `SHOW TRANSACTION ISOLATION LEVEL;`;
var query23 = `SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;`;

var query24 = `BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
UPDATE "buyers" SET last_name='test100' WHERE first_name LIKE 'test2';
UPDATE "buyers" SET first_name='test200' WHERE first_name LIKE 'test2';
UPDATE "products" SET left_in_stock = 1 WHERE name LIKE 'test';
UPDATE "buyers" SET first_name='test250' WHERE first_name LIKE 'test200';
ROLLBACK;`;

var query30 = `SELECT account_balance FROM "sellers" WHERE id = 1;`;
// 18503 - seller_id = 1
var query31 = `SELECT wallet_balance from "buyers" where id = 11;`;
// 8048.1
var query32 = `SELECT left_in_stock from "products" where name like 'Cube%';`;
// 3 left in stock

var query33 = `delete from "order_items";
delete from "orders";`;

var query34 = `UPDATE "orders" SET status = ('on_the_way') where id=18;`;

var query35 = `alter table "buyers" add constraint check_positive check (wallet_balance >= 0.0);`;
var query37 = `alter table "buyers" drop constraint buyers_wallet_balance_check;`;

var query36 = `select * from "products" where left_in_stock = 0;`;

var query38 = `select * from "products" where brand in ('stylestop') order by price desc`;

var initQueries = [query38];

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
